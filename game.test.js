expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");

const {Warrior, Armor,Weapon,attack,getWarriors,setUpWarriors,fight} = require('./game');

/*describe("Test", () => {
  it("true to be true", () => {
    true.should.be.true;
  });

  describe("Roll dice function", () => {
    it("Roll dice should not return 0 when type is zero", () => {
     var total = Warrior.rollDice(1000,0);
      total.should.not.equal(0);
      
    });
  })
})*/

describe("Creating warrior in isolated environment", () => {
  var Scorpion;
  var spineArmor;
  var spineChain;
  var leatherArmor;
  var sword;

  beforeEach(function (){
    spineArmor = new Armor("Spine Armor", 6);
    spineChain = new Weapon("Spine Chain", 5);
    Scorpion = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);

    leatherArmor = new Armor("Leather Armor", 3);
     sword = new Weapon("Chang Sword", 6);
    LiuKang = new Warrior("Lui Kang", 6, 8, [leatherArmor, sword]);
  });

  it("Warrior name should be Scorpian", () => {
    Scorpion.name.should.equal("Scorpion");
  });

  it("Warrior strength should be 7", () => {
    Scorpion.strength.should.equal(7);
  });

  it("Warrior skill should be 7", () => {
    Scorpion.skill.should.equal(7);
  });

  it("Warrior gear array should contain spineArmor and spineChain ", () => {
    Scorpion.gear[0].should.equal(spineArmor);
    Scorpion.gear[1].should.equal(spineChain);
  });

  it('Add gear should calculate bonus and return 12',() =>{
    Scorpion.addGear(spineArmor);
    Scorpion.armorBonus.should.equal(12);
  });

  it('Remove gear should calculate bonus and return 0',() =>{
    Scorpion.removeGear();
    Scorpion.armorBonus.should.equal(0);
  });

  it('Fight between scorpian and luikan',() =>{
    setUpWarriors();
    fight();
    
  });

  afterEach(function(){
    Scorpian = undefined;
  });
 
});

describe("Testing Attack function", () => {

  var rollDice;
  beforeEach(function (){
    rollDice = function(){
      return 20;
    }
  });  
  it("Attack function should return true", () => {
    var val = attack(rollDice,10,5,5);
    val.should.equal(true);
  });
});

describe("Testing database.json", () => {

    it("Database json list count should return 7", (done) => {
      getWarriors(function(error,data){
        data.length.should.equal(7);
        done();
      });
    });
  });


  


