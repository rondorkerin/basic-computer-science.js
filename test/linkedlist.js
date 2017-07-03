var expect    = require("chai").expect;
var LinkedList = require("../lib/linked_list");

describe("Linked List", function() {
  describe("insert checkDuplicate false", function() {
    it("doesnt insert duplicate values", function() {
      let l1 = new LinkedList(5);
      let l2 = new LinkedList(6, l1);
      let l3 = new LinkedList(7, l2);

      l3.insert(4);
      l3.insert(4, true);
      let values = l3.valueOf();
      expect(values.length).to.equal(4);
    });

    it("inserts duplicate values when checkDuplicate false", function() {
      let l1 = new LinkedList(5);
      let l2 = new LinkedList(6, l1);
      let l3 = new LinkedList(7, l2);

      l3.insert(4);
      l3.insert(4, false);
      let values = l3.valueOf();
      expect(values.length).to.equal(5);
    });
  });
});
