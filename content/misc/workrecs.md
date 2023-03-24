+++
title = "Work Tool Gazing"
+++

## Package Management

### chocolatey

Great for installing command-line or lesser known apps without having to go and find them online.

### scoop

Same as the above, but I tend not to use it at work even though I like it more than chocolatey. Has an issue where starting a GUI program from the command-line will lock up whatever terminal you started it from. You can bypass it with a pretty easy batch shim, but given how little we live in the command-line it's not really worth it.

## Runtime Management

### nvm

Absolutely necessary if you're developing against multiple versions of node, or if you encounter a bug with one version and want to easily upgrade to the next.

## Command-line Magic

### ripgrep

Blazingly fast grep. Before I became aquainted with IntelliJ's full text search I would use this to dive through the codebase. There are some uses cases where it's more flexible than the full text search, and can be composed with other command-line utils for fun & profit.

## jq

Parses JSON and let's you poke at it all from the comfort of your terminal. Useful for pretty printing minified JSON you've copied from somewhere else.

## Search

### Everything

Everything will index your entire hard drive and allow you to search it quicky and easily. I've got mine hot-keyed to CTRL-ALT-x so I can pop it open whenever I need to find that file I remember saving, but can't remember where, or if I need to find a log file that I know was just written to but don't know exactly where.

## Screenshots & Screen recording

### ShareX

ShareX is the swiss army knife of screenshot utility programs. You screen shot whole screens, windows, portions of windows, draw a box over what you'd like to screenshot, screen record gifs, videos, upload to any number of services after screenshotting/recording, the list goes on and on. There is an issue with high DPI monitors though that you can fix by following the instructions here: [hey dummy insert a link here]

## REPLs

### JShell

Java REPL that comes with the JDK. Great in a pinch to try something out without having the write out a full program, get your platform running and hit a breakpoint, or visit some slow online REPL.

### Node

Same as above, but for JavaScript.

## Image Manipulation

### Paint.net

This is where the magic happens. Photoshop light.

### ImageMagick

Magic happens here too, but this time it's from the command-line.