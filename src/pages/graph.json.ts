// Link graph data for the graph view (src/lib/graph-view.ts), like Quartz's contentIndex.json.
import { getGraphData } from "../lib/graph-data";

export async function GET() {
	return new Response(JSON.stringify(await getGraphData()), {
		headers: { "Content-Type": "application/json" },
	});
}
