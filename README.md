[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges)

# snack.js

Simple toast notifications for modern browsers without dependencies.
Can be used with browserify or standalone.

## Use

`npm install snack.js --save-dev`

[![NPM](https://nodei.co/npm/snack.js.png?downloads=true)](https://nodei.co/npm/snack.js/)

add the css (dist/css/snack.min.css)

### browserify

```js
var Snack = require('snack.js');
var snack = new Snack();

snack.show('A snack', 4000);
```

### standalone

Include snack.min.js and snack.min.css from the dist folder (see index.html).
