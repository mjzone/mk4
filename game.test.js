expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");

const {
  Warrior,
  Weapon,
  Armor,
  rollDice
} = require("./game");


describe("Test for MK4 - RollDice Method", () => {
  it("Roll Dice Should not return 0", () => {
    var rollDiceValue =  Warrior.rollDice(1000,0);   
    rollDiceValue.should.not.equal(0);
  });

});

