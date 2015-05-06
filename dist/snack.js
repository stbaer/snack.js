(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var Snack = require('./snack');

global.Snack = Snack;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./snack":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
