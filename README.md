# buddhavacana

**buddhavacana** is a website that documents my journey reading and studying Buddhist texts, primarily from the Pāli Canon (Tipiṭaka) but also supplementary books and articles. My intent is to rely as much on the original Pāli terms and text where possible, and only rely on English translations as an interim aid to understanding.

It is based on the [Docsy](https://docsy.dev) [Hugo theme module](https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme) which is intended for technical documentation sites, providing easy
site navigation, structure, and more.

In this project, the Docsy theme component is pulled in as a Hugo module, together with other module dependencies:

```bash
$ hugo mod graph
github.com/ChristineTham/buddhavacana github.com/google/docsy@v0.3.0
github.com/ChristineTham/buddhavacana github.com/google/docsy/dependencies@v0.3.0
github.com/google/docsy/dependencies@v0.3.0 github.com/twbs/bootstrap@v4.6.1+incompatible
github.com/google/docsy/dependencies@v0.3.0 github.com/FortAwesome/Font-Awesome@v0.0.0-20210804190922-7d3d774145ac
```

You can find detailed theme instructions in the [Docsy user guide][https://docsy.dev/docs/].

## Using this repository

Make your own local working copy of your new repo using git clone and then install required packages:

```bash
git clone --depth 1 https://github.com/ChristineTham/buddhavacana.git
npm install
```

## Running the website locally

Building and running the site locally requires a recent `extended` version of [Hugo](https://gohugo.io).
You can find out more about how to install Hugo for your environment in our
[Getting started](https://www.docsy.dev/docs/getting-started/#prerequisites-and-installation) guide.

Once you've made your working copy of the site repo, from the repo root folder, run:

```bash
hugo server
```

## Troubleshooting

As you run the website locally, you may run into the following error:

```bash
$ hugo server

INFO 2021/01/21 21:07:55 Using config file: 
Building sites … INFO 2021/01/21 21:07:55 syncing static files to /
Built in 288 ms
Error: Error building site: TOCSS: failed to transform "scss/main.scss" (text/x-scss): resource "scss/scss/main.scss_9fadf33d895a46083cdd64396b57ef68" not found in file cache
```

This error occurs if you have not installed the extended version of Hugo.
See this [section](https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-hugo) of the user guide for instructions on how to install Hugo.

Or you may encounter the following error:

```bash
$ hugo server

Error: failed to download modules: binary with name "go" not found
```

This error occurs if you have not installed the `go` programming language on your system.
See this [section](https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-go-language) of the user guide for instructions on how to install `go`.
