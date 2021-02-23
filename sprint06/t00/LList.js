"use strict";

let LLData = require("./LLData");

class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value) {
        let node = new LLData(value);
        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new LLData(value);
        }
        this.length++;
    }
    [Symbol.iterator] = function* () {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    };
    getFirst() {
        if (!this.head) {
            return null;
        } else {
            return this.head;
        }
    }
    getLast() {
        if (!this.head) {
            return null;
        } else {
            while (this.head) {
                if (!this.head.next) {
                    return this.head;
                }
                this.head = this.head.next;
            }
        }
    }
    addFromArray(array) {
        array.forEach((element) => {
            this.add(element);
        });
    }
    remove(value) {
        if (!this.head) {
            return "there is nothing to remove";
        } else {
            while (this.head) {
                if (this.head.value === value) {
                    this.head = this.head.next;
                    return this.head;
                }
            }
        }
    }
    removeAll(value) {
        if (!this.head) {
            return "there is nothing to remove";
        }
        // else {
        // }
    }
    contains(value) {
        if (!this.head) {
            return "there is an empty list";
        } else {
            return [...this].includes(value);
        }
    }

    clear() {
        this.head = null;
    }
    count() {
        if (!this.head) {
            return "there is an empty list";
        } else {
            return this.length;
        }
    }
    toString() {
        if (!this.head) {
            return "there is an empty list";
        } else {
            return [...this].join(", ");
        }
    }
    filter(callback) {
        if (!this.head) {
            return "there is an empty list";
        } else {
            return [...this].filter(callback);
        }
    }
}

module.exports = { LList };