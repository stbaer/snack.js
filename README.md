# snack.js

> Simple lightweight toasts (minified and gzipped less ~ 1.5 kb js incl. bundled css);

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## Install

`npm i snack.js`

[![NPM](https://nodei.co/npm/snack.js.png?downloads=true)](https://nodei.co/npm/snack.js/)

## Usage

**js**

```
var Snack = require('snack.js'); // or include dist/snack.(min.)js for the standalone version

var snack = new Snack({
    // optional, defaults to document.body
    domParent: document.querySelector('.some-element');
});
 
// show a snack for 4s
snack.show('Snack content', 4000);
 
// html content
snack.show('<h1>HTML</h1>');
 
// hide the snack
snack.hide();
 
// toggle / show it again
snack.toggle();
 
// destroy the snack
 snack.destroy();
```

The styles are included in the dist/js files (via [cssify](https://www.npmjs.com/package/cssify));

## API

- `snack.show(content, timeout)` - show snack with *content* for *timeout* ms

    content can be a string or html

- `snack.hide()` - hide the snack

- `snack.toggle()` - show / hide the snack

- `snack.destroy()` - destroy the instance

## Build

Install the dependencies, `npm i`, then run the build `npm run build`

## Examples / visual tests

*[beefy](http://didact.us/beefy/) is expected to be installed globally -> `npm i beefy -g`

- Standalone: `npm run test:visual-standalone`

- Browserify: `npm run test:visual-browserify`

## Licence

MIT
