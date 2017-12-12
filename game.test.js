expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
scorpian = require("./game").Scorpion;
rolldice = require("./game").Warrior.rollDice;
Armor = require("./game").Armor;
Weapon = require("./game").Weapon;
Warrior = require("./game").Warrior;
attack = require("./game").attack;

// describe("Test Calculate bonus", () => {
//   it("should return a bonus of 6", () => {
//     expect(scorpian.armorBonus).to.equal(0);
//     //fix me --> armorBonus is always returning zero
//   });
// });

// describe("Test Roll Dice", () => {
//   it("should never return a value of zero", () => {
//     for( i = 1; i<=1000; i++){
//           let diceVal = rolldice(1,20);
//           expect(diceVal).to.not.equal(0);
//     }
//     //fix me --> test roll dice should never return a zero
//   });
// });

// describe("Test", () => {
  
//     var LiuKang;
//     beforeEach(function(done) {
//         var leatherArmor = new Armor("Leather Armor", 3);
//         var sword = new Weapon("Chang Sword", 6);
//         LiuKang = new Warrior("Lui Kang", 6, 8, [leatherArmor, sword]);
//         setTimeout(done, 300);
//     });

//     it('response should be null', function() {
//       expect(LiuKang.strength).to.equal(6);
//     });

//     afterEach(function(done) {
//        LiuKang = undefined;
//        setTimeout(done, 300);
//     });
   
// });

describe("Test", () => {
var enemyArmor, enemySkill, warriorStrength, rollDiceFunc;
  beforeEach(function(done) {
         enemyArmor = 5;
         enemySkill = 6;
         warriorStrength= 6;
        rollDiceFunc = (val1, val2) => {
          return 20;
        }
        setTimeout(done, 300);
    });
  
    it('should return true when calling attack', function() {
      expect(attack(enemyArmor, enemySkill, warriorStrength, rollDiceFunc)).to.equal(true);
    });
   
});
