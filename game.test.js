expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
const {
  getScorpion,
  Warrior,
  Armor,
  Weapon,
  attack,
  getWarriors
} = require("./game");


describe("Testing Database", () => {
  it("should return warriors", (done) => {
    getWarriors((err, data) => {
      console.log(data);
      data.length.should.equal(7);
      //wait
      done();
    });
  });
});

describe("Attack", () => {
  let rollDice = () => 20;

  it("warriar should attack the enemy", () => {
    var result = attack(rollDice, 10, 5, 5);
    result.win.should.be.true;
  });
  it("warriar points should equal to 25", () => {
    var result = attack(rollDice, 10, 5, 5);
    result.warriorPoints.should.equal(25);
  });

});

describe("Attack", () => {
  it("Scorpion should be an object", () => {
    var Scorpion = getScorpion();
    _.isObject(Scorpion).should.be.true;
  });

  it("armor bonus should not be 0 for Scorpion", () => {
    let Scorpion = getScorpion();
    Scorpion.armorBonus.should.not.equal(0);
  });
});

describe("Initial Conditions", () => {

  it("Scorpion should be an object", () => {
    var Scorpion = getScorpion();
    _.isObject(Scorpion).should.be.true;
  });

  it("armor bonus should not be 0 for Scorpion", () => {
    let Scorpion = getScorpion();
    Scorpion.armorBonus.should.not.equal(0);
  });
});

describe("RoleDice", () => {
  it("should return a number", () => {
    const num = Warrior.rollDice(1, 20);
    _.isFinite(num).should.be.true;
  });

  it("should not have a 0 in 1000 samples", () => {
    const sampleArr = new Array(1000);
    _.fill(sampleArr, 0);
    const rollDiceSamples = _.map(sampleArr, (item) => Warrior.rollDice(1, 20));
    const zeros = _.filter(rollDiceSamples, (item) => item === 0);
    zeros.length.should.not.equal(0);
  });
});

describe("Warrior Creation", () => {
  var Goro;

  var createWarrior = (name, armor, weapon, strength, skill) => {
    var armor = new Armor("Armor", armor);
    var weapon = new Weapon("Weapon", weapon);
    return new Warrior(name, strength, skill, [armor, weapon]);
  };

  beforeEach(() => {
    Goro = createWarrior("Goro", 10, 10, 10, 10);
  });

  it("Goro's strength should be 10", () => {
    Goro.strength.should.equal(10);
  });

  it("Goro's armorBouns is 10", () => {
    Goro.armorBonus.should.equal(10);
  });

  afterEach(() => {
    Goro = undefined;
  });
});