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
        content && typeof content === "object" && content !== null
        && content.nodeType === 1 && typeof content.nodeName==="string"
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
        setTimeout(function(){
            this.hide();
            this._isVisible = false;
        }.bind(this), timeout);
    }
};

/**
 * hide
 */
Snack.prototype.hide = function(){

    this.element.classList
        .remove('snack-opened');

    this._isVisible = true;
};

/**
 * destroy
 */
Snack.prototype.destroy = function(){
    this.container.removeChild(this.element);
};