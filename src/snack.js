/**
 * @class
 * @constructor
 *
 * @property {object} options
 * @property {string} [options.style] - only material atm
 */
function Snack(options) {

    options = options || {};

    var snackbar = document.createElement('div');

    snackbar.classList.add('snackbar');

    this.element = snackbar;
    this.domParent = options.domParent || document.querySelector('.snackbar-container');

    this.element.classList.add("snackbar");
    if (options.style) {
        snackbar.classList.add(options.style);
    }

    this.domParent.appendChild(this.element);
}

// constructor
Snack.prototype.constructor = Snack;
module.exports = Snack;

Object.defineProperties(Snack, {
    visible: {
        get: function(){
            return !!this._isVisible;
        },
        set: function(val){
            this[val ? 'show' : 'hide']();

        }
    }
});

/**
 *
 */
Snack.prototype.toggle = function(){
    this[this.visible ? 'show' : 'hide']();
};

Snack.prototype.show = function(content, timeout){


    this.element.innerHTML = content;
    this.element.classList.add('snackbar-opened');

    this._isVisible = true;

    if(timeout){
        setTimeout(function(){
            this.hide();
            this._isVisible = false;
        }.bind(this), timeout);
    }

};

Snack.prototype.hide = function(){

    this.element.classList
        .remove('snackbar-opened');

    this._isVisible = true;

};

Snack.prototype.destroy = function(){

    //@TODO
    // remove event listeners


    this.domParent.removeChild(this.element);

};