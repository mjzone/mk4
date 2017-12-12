expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
// Warrior = require("./game").Warrior;
// Armour = require("./game").Armor;
// Weapon = require("./game").Weapon;
const {
  Warrior,
  Weapon,
  Armor,
  testableAttack
} = require("./game");

describe("Test", () => {
  it("true to be true", () => {
    true.should.be.true;
  });
})

describe("Testing isolation of Warrior Class", () => {
  var spineArmor
  var spineChain
  var scorpion
  beforeEach(() => {
    spineArmor = new Armor("Spine Armor", 6);
    spineChain = new Weapon("Spine Chain", 5);
    scorpion = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);
  })

  it("should initalize warrior successfully", () => {
    expect(scorpion).to.be.an.instanceof(Warrior);
  })

  it("checks if initialized armour bonus is equal to 6", () => {
    expect(scorpion.armorBonus).to.be.equal(6);
  })

  it("should ")
  afterEach(() => {
    spineArmor = undefined;
    spineChain = undefined;
    scorpion = undefined;

  })
})

describe("Testing Warrior function", () => {
  var spineArmor
  var spineChain
  var scorpion
  beforeEach(() => {
    spineArmor = new Armor("Spine Armor", 6);
    spineChain = new Weapon("Spine Chain", 5);
    scorpion = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);
  })

  it("warrior wins should return true", () => {
    expect(testableAttack(7, 5, 12, 11)).to.be.true;
  })

  it("enemy wins should return false", () => {
    expect(testableAttack(7, 5, 12, 4)).to.be.false;
  })

  afterEach(() => {
    spineArmor = undefined;
    spineChain = undefined;
    scorpion = undefined;

  })
})

// describe("Test Armour class", () => {
//   describe("Test armorbonus field", () => {
//     it("Bonus shouldnt be 0", () => {
//       var spineArmor = new Armor("Spine Armor", 6);
//       var spineChain = new Weapon("Spine Chain", 5);
//       Scorpion = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);
//       // console.log(Scorpion.armorBonus);
//       expect(Scorpion.armorBonus).not.be.equal(0);
//     });
//   });

//   describe("rollDice function", () => {
//     it("should not return 0", () => {
//       for (i = 1; i <= 1000; i++) {
//         var num = Warrior.rollDice(i, 3)
//         // console.log(num)
//         expect(num).be.not.equal(0);
//       }

//     })

//     it("should be finite number", () => {
//       for (i = 1; i <= 1000; i++) {
//         var num = Warrior.rollDice(i, 3)
//         expect(_.isFinite(num)).should.be.true;

//       }

//     })

//     it("should be a valid number", () => {
//       for (i = 1; i <= 1000; i++) {
//         var num = Warrior.rollDice(i, 3)
//         expect(isNaN(num)).should.be.not.true;
//       }
//     })

//   })
// });