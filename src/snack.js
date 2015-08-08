/**
 * Returns true content it is a DOM element
 * @param {*} content
 * @returns {boolean}
 */
var isElement = function(content) {
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
        get: function() {
            return !!this._isVisible;
        },
        set: function(val) {
            this[val ? 'show' : 'hide']();
        }
    }
});

/**
 * Returns the snack container, creates one if it doesn't exist
 *
 * @returns {Element}
 */
Snack.prototype.getContainer = function() {
    var container = this.domParent.querySelector('.snack-container'),
        frag;
    if (!container) {
        frag = document.createElement('div');
        frag.classList.add('snack-container');
        this.domParent.appendChild(frag);
        container = frag;
    }
    return container;
};
/**
 * Toggles show/hide
 */
Snack.prototype.toggle = function() {
    this.visible = !this.visible;
};

/**
 * Show the snack
 *
 * @param {string} content
 * @param {number} [timeout]
 */
Snack.prototype.show = function(content, timeout) {
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
Snack.prototype.hide = function() {
    this.element.classList.remove('snack-opened');
    this._isVisible = false;
};
/**
 * destroy
 */
Snack.prototype.destroy = function() {
    this.container.removeChild(this.element);
};
