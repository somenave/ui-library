import $ from "../core";

$.prototype.getAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        return this[i].getAttribute(attributeName);
    }
    return this;
};

$.prototype.setAtt = function(attributeName, attributeValue = '') {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(attributeName, attributeValue);
    }

    return this;
};

$.prototype.removeAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].removeAttribute) {
            continue;
        }
        this[i].removeAttribute(attributeName);
    }

    return this;
};

$.prototype.toggleAttr = function(attributeName, attributeValue = '') {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        if (this[i].hasAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        } else {
            this[i].setAttribute(attributeName, attributeValue);
        }
    }

    return this;
};