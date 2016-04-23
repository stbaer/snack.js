var Snack = require('../../');

var testContainer = document.createElement('div');
testContainer.classList.add('test');

document.body.appendChild(testContainer);

console.log('here', Snack);

var snack = new Snack();
var snack2 = new Snack({domParent: testContainer});

snack.show('First, container appended to body', 1000);

setTimeout(function () {
    snack2.show('Second, different dom parent', 2000);
}, 2000);

setTimeout(function () {
    snack.show('<h1>HTML</h1><p style="color: red">content</p>');
    snack.toggle();
}, 6000);

setTimeout(function () {
    snack.show('destroying snack1 in 1s', 2000);
    setTimeout(function(){
        snack.destroy();
        console.log(snack);

    }, 1000);
}, 9000);
