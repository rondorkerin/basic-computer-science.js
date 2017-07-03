var expect    = require("chai").expect;
var HashTable = require("../lib/hash_table");

describe("Hash Table", function() {
  describe("insert and lookup", function() {
    it("only returns true when items are in the table", function() {
      let table = new HashTable(5);
      table.insert('hey');
      expect(table.lookup('hey')).to.equal(true);
      expect(table.lookup('horses')).to.equal(false);
    });
  });
});
