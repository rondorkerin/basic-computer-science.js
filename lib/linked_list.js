/*
 * A linked list from scratch
 */
class LinkedList {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  valueOf() {
    let current = this;
    let values = [];
    while (current !== undefined) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  traverse() {
    let current = this;
    while (current !== undefined) {
      console.log(current.value);
      current = current.next;
    }
  }

  find(value) {
    let current = this;
    while (current !== undefined) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  insert(value, checkDuplicate) {
    let current = this;
    while (current !== undefined) {
      if (checkDuplicate && current.value == value) {
        return false;
      }
      if (current.next === undefined) {
        current.next = new LinkedList(value);
        return true;
      } else {
        current = current.next;
      }
    }
  }

  setNext(list) {
    this.next = list;
  }
}

module.exports = LinkedList;

