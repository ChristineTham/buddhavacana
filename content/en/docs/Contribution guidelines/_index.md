---
title: "Contribution Guidelines"
linkTitle: "Contribution Guidelines"
weight: 1000
description: >
  How to contribute to the website
---

I use [Hugo](https://gohugo.io/) to format and generate our website, the
[Docsy](https://github.com/google/docsy) theme for styling and site structure,
and [Github Pages](https://pages.github.com/) to manage the deployment of the site.

Hugo is an open-source static site generator that provides us with templates,
content organisation in a standard directory structure, and a website generation
engine. Pages are written in Markdown (or HTML), and Hugo wraps them up into a website.

Submissions and suggestions on improving the website are most welcome.

All submissions require review. I
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Updating a single page

If you've just spotted something you'd like to change while using the docs, there is a shortcut for you:

1. Click **Edit this page** in the top right hand corner of the page.
1. If you don't already have an up to date fork of the project repo, you are prompted to get one - click **Fork this repository and propose changes** or **Update your Fork** to get an up to date version of the project to edit. The appropriate page in your fork is displayed in edit mode.
1. Make, preview, and propose your changes.

## Previewing your changes locally

If you want to run your own local Hugo server to preview your changes as you work:

1. Follow the instructions in [Getting started](/docs/getting-started) to install Hugo and any other tools you need. You'll need at least **Hugo version 0.45** (we recommend using the most recent available version), and it must be the **extended** version, which supports SCSS.
2. Fork the [buddhavacana repo](https://github.com/ChristineTham/buddhavacana) repo into your own project, then create a local copy using `git clone`.

3. Run `hugo server` in the site root directory. By default your site will be available at http://localhost:1313/. Now that you're serving your site locally, Hugo will watch for changes to the content and automatically refresh your site.
4. Continue with the usual GitHub workflow to edit files, commit them, push the
  changes up to your fork, and create a pull request.

## Creating an issue

If you've found a problem in the docs, but you're not sure how to fix it yourself, please create an issue in the [Goldydocs repo](https://github.com/google/docsy-example/issues). You can also create an issue about a specific page by clicking the **Create Issue** button in the top right hand corner of the page.

## Useful resources

* [Docsy user guide](https://www.docsy.dev/docs/): All about Docsy, including how it manages navigation, look and feel, and multi-language support.
* [Hugo documentation](https://gohugo.io/documentation/): Comprehensive reference for Hugo.
* [Github Hello World!](https://guides.github.com/activities/hello-world/): A basic introduction to GitHub concepts and workflow.


