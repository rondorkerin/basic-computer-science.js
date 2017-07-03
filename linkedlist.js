/*
 * A linked list from scratch
 */
class LinkedList {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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

function test() {

  let l1 = new LinkedList(5);
  let l2 = new LinkedList(6, l1);
  let l3 = new LinkedList(7, l2);

  l3.insert(4);
  l3.insert(4, true);
  l3.insert(4, false);
  l3.traverse();
}
test();
