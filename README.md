# snack.js

> Simple lightweight toasts

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## Install

`npm i snack.js`

[![NPM](https://nodei.co/npm/snack.js.png?downloads=true)](https://nodei.co/npm/snack.js/)

## Usage

**css**

include *dist/css/snack.min.css*

**js**

```js
var Snack = require('snack.js'); // or include dist/snack.min.js for the standalone version

var snack = new Snack({
    // optional, defaults to document.body
    domParent: document.querySelector('.some-element');
});

// show a snack for 4s
snack.show('Snack content', 4000);
```

## API

- `snack.show(content, timeout)` - show snack with *content* for *timeout* ms

    content can be a string or html

- `snack.hide()` - hide the snack

- `snack.toggle()` - show / hide the Snack

- `snack.destroy()`

## Build

You will need to have [node][node] and [gulp][gulp] setup on your machine.

Then you can install the dependencies and build:

```js
npm i && gulp build
```

Other gulp tasks:

- `gulp serve` - starts a browserify server, open index.html for a snack example
- `gulp jshint` - jshint task


That will output the built distributables to `./dist`.

[node]:       http://nodejs.org/
[gulp]:       http://gulpjs.com/

## Licence

MIT
