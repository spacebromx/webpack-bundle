# Webpack Project Skeleton

My name is [Alan Medina](https://alanmedina.me/) and I created this project as a starting point for my React applications. I used Webpack, but recently I've been using the awesome [ParcelJS bundler](https://parceljs.org/), which requires almost no configuration.

[![License][license-badge]](#license)

[![PRs Welcome][prs-badge]][prs]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Project overview](#project-overview)
- [Setup](#setup)
- [Running the app](#running-the-app)
- [Generating the bundle](#generating-the-bundle)
- [Committing files](#committing-files)
- [LICENSE](#license)
- [Special thanks](#special-thanks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Project overview
The purpose of this project is to have a skeleton/starting point to easily start developing React apps, without having to manually configure the tools I use for most of my projects. In a nuthsell, this is the workflow I'm aiming for with this project:

* Create a React app without the create-react-app tool.
* Code linting with [ESLint](https://eslint.org/)
* Code formatting with [Prettier](https://github.com/prettier/prettier)
* Support for SCSS compilation and autoprefix using [PostCSS](https://postcss.org/)
* Unit testing and code coverage capabilities using [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)
* A Development server with live reload capabilities using [Webpack](https://webpack.js.org/)
* Pre-commit hooks using [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

I've added some scripts to the `package.json` file that include basic tasks like linting, code formatting and unit test execution.


**NOTE: This repository is meant for instructional purposes. While you can achieve all of this with tools like create-react-app, I think it's a good learning exercise.**

## Setup

To start, clone the repository in the folder of your choice, and install the dependencies

```
git clone https://github.com/spacebromx/webpack-bundle.git
cd webpack-bundle
npm install
```

## Running the app

To get the app up and running, run:

```shell
npm run start
```

This will start the webpack development server at `http://localhost:8080`
If your default browser doesn't automatically open at this location, open it yourself and enter the address manually.

## Generating the bundle

I've included a couple of scripts to generate the final bundle. One is for a **development environment** (unminified, commented file). 

For that case, use the command:

```shell
npm run dev
```

For a production build, use the command:

```shell
npm run build
```

## Committing files
Before any new file is committed, the staged files will be autofromatted by prettier, linted by ESLint, and the whole testing suite will be run. If everything is OK, the commit will be successful. Otherwise, you'll be asked to fix the errors before continuing.

## LICENSE

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).

## Special thanks
I ran into [this amazing article](https://www.valentinog.com/blog/from-gulp-to-webpack-4-tutorial/) by Valentino Gagliardi, where he explains most of the workflow I used here. I also found a great inspiration in [Kent C. Dodds](https://kentcdodds.com/) and the great job he does teaching and sharing. I took this readme structure from one of his creations.

[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/testing-workshop.svg?style=social
[github-watch]: https://github.com/spacebromx/webpack-bundle/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/testing-workshop.svg?style=social
[github-star]: https://github.com/spacebromx/webpack-bundle/stargazers

