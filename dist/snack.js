(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Snack = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

function injectStyleTag (document, fileName, cb) {
  var style = document.getElementById(fileName)

  if (style) {
    cb(style)
  } else {
    var head = document.getElementsByTagName('head')[0]

    style = document.createElement('style')
    if (fileName != null) style.id = fileName
    cb(style)
    head.appendChild(style)
  }

  return style
}

module.exports = function (css, customDocument, fileName) {
  var doc = customDocument || document
  /* istanbul ignore if: not supported by Electron */
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css
    return sheet.ownerNode
  } else {
    return injectStyleTag(doc, fileName, function (style) {
      /* istanbul ignore if: not supported by Electron */
      if (style.styleSheet) {
        style.styleSheet.cssText = css
      } else {
        style.innerHTML = css
      }
    })
  }
}

module.exports.byUrl = function (url) {
  /* istanbul ignore if: not supported by Electron */
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode
  } else {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')

    link.rel = 'stylesheet'
    link.href = url

    head.appendChild(link)
    return link
  }
}

},{}],2:[function(require,module,exports){
require('../styles/snack.min.css');

/**
 * Returns true content it is a DOM element
 * @param {*} content
 * @returns {boolean}
 */
var isElement = function (content) {
    return !!(
        typeof HTMLElement === 'object' ? content instanceof HTMLElement : content &&
        typeof content === 'object' && content !== null &&
        content.nodeType === 1 && typeof content.nodeName === 'string'
    );
};

/**
 * @class
 * @constructor
 *
 * @property {object} options
 * @property {Element} [options.domParent=document.body]
 */
function Snack(options) {

    options = options || {};

    this.domParent = options.domParent || document.body;

    this.container = document.createElement('div');
    this.element = document.createElement('div');

    this.container.classList.add('snack-container');
    this.element.classList.add('snack');

    this.container.appendChild(this.element);
    this.domParent.appendChild(this.container);

}
// constructor
Snack.prototype.constructor = Snack;
module.exports = Snack;

Object.defineProperties(Snack, {
    visible: {
        get: function () {
            return !!this._isVisible;
        },
        set: function (val) {
            this[val ? 'show' : 'hide']();
        }
    }
});

/**
 * Toggles show/hide
 */
Snack.prototype.toggle = function () {
    this.visible = !this.visible;
};

/**
 * Show the snack
 *
 * @param {string} content
 * @param {number} [timeout]
 */
Snack.prototype.show = function (content, timeout) {
    if (isElement(content)) {
        this.element.innerHTML = '';
        this.element.appendChild(content);
    } else {
        this.element.innerHTML = content;
    }
    this.element.classList.add('snack-opened');
    this._isVisible = true;
    if (timeout) {
        setTimeout(this.hide.bind(this), timeout);
    }
};
/**
 * Hide the snack
 */
Snack.prototype.hide = function () {
    this.element.classList.remove('snack-opened');
    this._isVisible = false;
};
/**
 * destroy
 */
Snack.prototype.destroy = function () {
    this.domParent.removeChild(this.container);
};


},{"../styles/snack.min.css":3}],3:[function(require,module,exports){
var inject = require('./../node_modules/cssify');
var css = ".snack-container{position:fixed;left:20px;bottom:0;z-index:99999}.snack{overflow:hidden;clear:both;min-width:288px;max-width:568px;cursor:pointer;opacity:0;background-color:#323232;color:#fff;font-size:14px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);height:0;transition:transform .2s ease-in-out,opacity .2s ease-in,height 0s linear .2s,padding 0s linear .2s,height 0s linear .2s;transition:transform .2s ease-in-out,opacity .2s ease-in,height 0s linear .2s,padding 0s linear .2s,height 0s linear .2s,-webkit-transform .2s ease-in-out;-webkit-transform:translateY(200%);transform:translateY(200%)}.snack.snack-opened{height:auto;opacity:1;padding:14px 15px;margin-bottom:20px;transition:transform .2s ease-in-out,opacity .2s ease-in,height 0s linear .2s,height 0s linear .2s;transition:transform .2s ease-in-out,opacity .2s ease-in,height 0s linear .2s,height 0s linear .2s,-webkit-transform .2s ease-in-out;-webkit-transform:none;transform:none}@media (max-width:767px){.snack-container{left:0!important;right:0;width:100%}.snack-container .snack{min-width:100%}.snack-container .snack.snack-opened{border-radius:0;margin-bottom:0}}\n";
inject(css, undefined, '_19gnn7m');
module.exports = css;

},{"./../node_modules/cssify":1}]},{},[2])(2)
});