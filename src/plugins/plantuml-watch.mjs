import { spawn } from "node:child_process";
import { isAbsolute, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const DOCS = fileURLToPath(new URL("../content/docs/", import.meta.url));
const RENDERER = fileURLToPath(new URL("../../scripts/render-plantuml.mjs", import.meta.url));

export function plantumlWatch() {
  return {
    name: "plantuml-watch",
    apply: "serve",
    configureServer(server) {
      if (!server.httpServer) return;
      let timer;
      let renderer;
      let pending = false;
      let closed = false;

      const render = () => {
        if (closed) return;
        if (renderer) {
          pending = true;
          return;
        }

        renderer = spawn(process.execPath, [RENDERER], {
          cwd: process.cwd(),
          stdio: "inherit",
        });
        renderer.on("error", (error) => {
          console.error("[plantuml] Could not start SVG rendering.", error);
        });
        renderer.on("exit", (code, signal) => {
          renderer = undefined;
          if (!closed) {
            if (code === 0) server.ws.send({ type: "full-reload" });
            else console.error(`[plantuml] SVG rendering failed (code ${code ?? "null"}, signal ${signal ?? "none"}).`);
          }
          if (pending && !closed) {
            pending = false;
            render();
          }
        });
      };

      const changed = (file) => {
        const path = relative(DOCS, resolve(file));
        if (path === ".." || path.startsWith(`..${sep}`) || isAbsolute(path)) return;
        if (!/\.(md|mdx)$/i.test(path)) return;
        clearTimeout(timer);
        timer = setTimeout(render, 200);
      };

      server.watcher.on("change", changed);
      server.watcher.on("add", changed);
      server.watcher.on("unlink", changed);
      server.httpServer.once("close", () => {
        closed = true;
        pending = false;
        clearTimeout(timer);
        renderer?.kill();
      });
    },
  };
}
