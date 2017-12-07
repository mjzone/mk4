expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
const { setUpWarriors, Warrior, Armor, Weapon } = require("./game");

describe("Test", () => {
  const spineArmor = new Armor("Spine Armor", 6);
  const spineChain = new Weapon("Spine Chain", 5);
  const testWarrior = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);
  it("armor bonus should not be 0", () => {
    var ab = testWarrior.armorBonus;
    // ab.should.not.be(0);
    expect(ab).not.equal(0);
  });
})