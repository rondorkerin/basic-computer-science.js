'use strict';
const crypto = require('crypto');
const LinkedList = require('./linked_list');

class HashTable {
  constructor(length) {
    this.table = [];
    this.length = length;
  }

  hash(value) {
    const secret = 'derp';
    return crypto.createHmac('sha256', secret)
                   .update('value')
                   .digest('base64');

  }

  lookup(value) {
    let index = this.hash(value) % this.length;
    if (this.table[index]) {
      return this.table[index].find(value) ? true : false;
    } else {
      return false;
    }

  }

  insert(value) {
    let index = this.hash(value) % this.length;
    if (this.table[index]) {
      this.table[index].insert(value, true);
    } else {
      this.table[index] = new LinkedList(value);
    }

  }


}

module.exports = HashTable;
