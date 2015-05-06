## snack.js

Simple toast notifications for modern browsers without dependencies.
Can be used with browserify or standalone.

## Use


### browserify

- install: `npm install stbaer/snack.js --save-dev`
- add the css (dist/css/snack(.min).css)
- require it `var Snack = require('snack.js');`
    
    
- show a notification:
```
snack = new Snack();
snack.show('A snack', 4000);
```    
    
### standalone

include the dist/snack(.min).js and dist/css/snack(.min).css, see index.html


    
    
    

