expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
const { Warrior } = require("./game");

describe("Test", () => {
  it("rollDice should not return zero", () => {
    
    let resultArray = [];
    for(let i = 0; i < 1000; i++) {
      resultArray.push(Warrior.rollDice(5, 5));
    }

    resultArray.should.not.contain(0);

  });
})