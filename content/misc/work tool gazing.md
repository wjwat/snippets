+++
title = "Work Tool Gazing"
+++

## Package Management

Any of the rest of these tools can be installed with either of the two listed package managers.

### chocolatey

Great for installing apps straight from the command-line.

- [Why Chocolatey](https://chocolatey.org/why-chocolatey)
- [Install](https://chocolatey.org/install)

### scoop

Same as the above, but I tend not to use it at work even though I like it more than chocolatey. Has an issue where starting a GUI program from the command-line will lock up whatever terminal you started it from. You can bypass it with a batch shim, but given how little we live in the command-line it's not really worth it.

- [scoop.sh](https://scoop.sh/)

## Runtime Management

### nvm

Absolutely necessary if you're developing against multiple versions of node, or if you encounter a bug with one version and want to easily upgrade to the next.

- [nvm-windows](https://github.com/coreybutler/nvm-windows)

## Command-line Magic

### ripgrep

Blazingly fast grep. Before I became aquainted with IntelliJs full text search I would use this to dive through the codebase. There are some uses cases where it's more flexible than the full text search, and can be composed with other command-line utils for fun & profit.

- [ripgrep](https://github.com/BurntSushi/ripgrep)

### jq

Parses JSON and let's you poke at it all from the comfort of your terminal. Useful for pretty printing minified JSON you've copied from somewhere else.

- [jq](https://github.com/stedolan/jq)

## Search

### Everything

Everything will index your entire hard drive and allow you to search it quicky and easily. I've got mine hot-keyed to CTRL-ALT-x so I can pop it open whenever I need to find that file I remember saving, but can't remember where, or if I need to find a log file that I know was just written to but don't know exactly where.

- [Voidtools](https://www.voidtools.com/)

## Screenshots & Screen recording

### ShareX

ShareX is the swiss army knife of screenshot utility programs. You screen shot whole screens, windows, portions of windows, draw a box over what you'd like to screenshot, screen record gifs, videos, upload to any number of services after screenshotting/recording, the list goes on and on. There is an issue with high DPI monitors though that you can fix by following the instructions in the link below.

- [ShareX](https://getsharex.com/)
- [ShareX High DPI Mouse Pointer Offset Fix](https://helgeklein.com/blog/sharex-free-screen-recording-tool-mouse-pointer-offset-high-dpi-fix/)

## REPLs

### JShell

Java REPL that comes with the JDK. Great in a pinch to try something out without having to write out a full program, get your platform running and hit a breakpoint, or visit some slow online REPL.

- [JShell](https://docs.oracle.com/javase/9/jshell/introduction-jshell.htm)

### Node

Same as above, but for JavaScript.

- [How to use the Node.js REPL](https://nodejs.dev/en/learn/how-to-use-the-nodejs-repl/)

## Image Manipulation

### Paint.net

This is where the magic happens. Photoshop light.

- [Paint.net](https://www.getpaint.net/)

### ImageMagick

Magic happens here too, but this time it's from the command-line.

- [ImageMagick](https://imagemagick.org/)

## Text Editor

### Micro

Good for editing files in the terminal.

- [micro](https://github.com/zyedidia/micro)
