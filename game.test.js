expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");

const {Warrior} = require('./game');

describe("Test", () => {
  it("true to be true", () => {
    true.should.be.true;
  });

  describe("Roll dice function", () => {
    it("Roll dice should not return 0 when type is zero", () => {
     var total = Warrior.rollDice(1000,0);
      total.should.not.equal(0);
      
    });
  })
})