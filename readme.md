# Demonstration of dynamic module loading using Webpack and System.js

This is a demo that uses Webpack to bundle libraries and modules and System.js to dynamically load the modules.

## Project: core

Contains the basic setup to create the library as well as two external modules (`WidgetA` and `WidgetB`)

### Usage

Run the following (you need node.js, webpack, npm, gulp and typings installed)
```
cd core
npm init
typings init
gulp serve
```

Then browse to [http://localhost:1337/](http://localhost:1337/)

### Verification

Expected output in browser console is. Widgets are loaded from an array in `main.ts`.
```  
* Rendering Widget A
* Widget A
* Rendering Widget B
* Widget B
```
And the background should be pink and foreground navy blue.

### Additional commands

Run the following to just build (copies .html to `./dist` and runs webpack) it:

```
gulp
```

Run the following to just start the web server

```
node server.js
```
## Project: external-module

*TBD*


### Warranty

None whatsoever - works on my machine....