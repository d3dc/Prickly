# Prickly Sketch Plugin

This is a Sketch plugin to add menu items for `kactus-cli` - letting you use it as part of your existing workflow without an additional app.

![Example Screenshot](/docs/example.png)

## Requirements

* Sketch 44+

* kactus-cli (am I allowed to bundle this?)

  `npm install -g kactus-cli`

<sup>Kactus itself is not required</sup>

## Installation

* [Download a release](https://github.com/d3dc/Prickly/releases)
* Unzip
* Double click `Prickly.sketchplugin`

## Usage

* Design
* Select "Prickly > Commit Changes"
* ...
* Profit!

## Future

* File watching
* Git hooks?

## Difference from the Git plugin
The git plugin provides a lot of the features that Kactus does dynamically - statically. But it does it by brute-force rendering every symbol every commit. This plugin instead only creates commits that Kactus can understand.

## About this project

There are a few attempts to use Kactus to get a good git workflow going; But all of them are based on githooks and file watchers. Why run another Node process when Sketch can watch our files for us?

## Acknowledgements

[Kactus CLI](https://github.com/kactus-io/kactus-cli)
