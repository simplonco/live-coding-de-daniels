var objetIntelligent = function(name) {
  this.name = name;
  this.intelligent = true;
  this.skills = [];
  this.getName = function() {
    return this.name;
  }
  this.setName = function (nameParm){
    this.name = nameParm;
  }
  this.addSkill = function (skillParm){
    this.skills.push(skillParm);
  }
}

var instanceDeMonObjetIntelligent1 = new objetIntelligent('John');
var o = instanceDeMonObjetIntelligent1;
console.log(o.getName());

o.setName('Daniels');
console.log('bjr ' + o.name);

o.addSkill('html5');
console.log(o.skills);

o.addSkill('css3');
console.log(o.skills);

o.addSkill('javascript');
console.log(o.skills);
