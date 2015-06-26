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
 * @property {Element} [options.domParent=document.body]
 */
function Snack(options) {

    options = options || {};

    var snack = document.createElement('div');
    snack.classList.add('snack');

    this.element = snack;
    this.domParent = options.domParent || document.body;
    this.container = this.getContainer();

    this.container.appendChild(this.element);
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
 * @returns {Element}
 */
Snack.prototype.getContainer = function(){
    var container = this.domParent.querySelector('.snack-container'),
        frag;

    if(!container){
        frag = document.createElement('div');
        frag.classList.add('snack-container');
        this.domParent.appendChild(frag);
        container = frag;
    }

    return container;
};

/**
 *
 */
Snack.prototype.toggle = function(){
    this[this.visible ? 'show' : 'hide']();
};

/**
 * Returns true content it is a DOM element
 * @param {*} content
 * @returns {boolean}
 */
Snack.prototype.isElement = function(content){
    return !!(
        typeof HTMLElement === "object" ?
        content instanceof HTMLElement : //DOM2
        content && typeof content === "object" && content !== null &&
        content.nodeType === 1 && typeof content.nodeName==="string"
    );
};

/**
 * show
 *
 * @param {string} content
 * @param {number} [timeout]
 */
Snack.prototype.show = function(content, timeout){

    if(this.isElement(content)){
        this.element.innerHTML = '';
        this.element.appendChild(content);
    }else{
        this.element.innerHTML = content;
    }
    this.element.classList.add('snack-opened');

    this._isVisible = true;

    if(timeout){
        setTimeout(this.hide.bind(this), timeout);
    }
};

/**
 * hide
 */
Snack.prototype.hide = function(){

    this.element.classList
        .remove('snack-opened');

    this._isVisible = false;
};

/**
 * destroy
 */
Snack.prototype.destroy = function(){
    this.container.removeChild(this.element);
};

},{}]},{},[1]);
