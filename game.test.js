expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
const { Warrior, Armor, Weapon, testableAttatck, getWarriors } = require("./game");

describe("Test warriors isolated", () => {
  var spineArmor, spineChain, scorpion;
  beforeEach(() => {
    spineArmor = new Armor("Spine Armor", 6);
    spineChain = new Weapon("Spine Chain", 5);
    scorpion = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);
  });

  afterEach(() => {
    spineArmor = undefined;
    spineChain = undefined;
    scorpion = undefined;
  });

  it("spineArmor name should be 'Spine Armor'", () => {
    spineArmor.name.should.be.equal("Spine Armor");
  });
  it("spineArmor should have bonus of 6", () => {
    spineArmor.bonus.should.be.equal(6);
  });

  it("spineChain name should be 'Spine Chain'", () => {
    spineChain.name.should.be.equal("Spine Chain");
  });
  it("spineChain should have damage of 5", () => {
    spineChain.damage.should.be.equal(5);
  });

  it("scorpion should be named 'Scorpion'", () => {
    scorpion.name.should.be.equal("Scorpion");
  });
  it("scorpion should have strength of 7", () => {
    scorpion.strength.should.be.equal(7);
  });
  it("scorpion should have skill of 7", () => {
    scorpion.strength.should.be.equal(7);
  });
  it("scorpion should have gear of spineArmor and spineChain", () => {
    scorpion.gear.should.be.an("array");
    _.find(scorpion.gear, spineArmor).should.be.instanceOf(Armor);
    _.find(scorpion.gear, spineChain).should.be.instanceOf(Weapon);
  });


  it("Warrior should win", () => {
    function randomMock(times, type) { return 0; }
    testableAttatck(randomMock, 20, 1, 1).should.be.true;
  })

  it("Warrior should attach Armor", () => {
    newArmor = new Armor("New Armor", 6);
    scorpion.addGear(newArmor);
    _.find(scorpion.gear, spineArmor).should.be.instanceOf(Armor);
  })

  it("Warrior should detach Armor", () => {
    newArmor = new Armor("New Armor", 6);
    // scorpion.addGear(newArmor);
    scorpion.removeGear(spineArmor);
    _.find(scorpion.gear, spineArmor).should.be.equal(undefined);
  })
});

describe("Warrior List", () => {
  it("list should have 7 warriors", (done) => {
    getWarriors((err, res) => {
      if(err) throw err;
      res.length.should.be.equal(7);
      done();
    });
  })
})
