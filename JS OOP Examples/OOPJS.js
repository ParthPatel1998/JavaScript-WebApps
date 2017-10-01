// Parth's Example:
// here we define our class using "this", before we even introduce bob
// can we used for any Person Objects to be created
function Person (age){
    this.age = age;
    this.setAge = function (newAge) {
        this.age = newAge;
};
};
// now we make bob
var bob = new Person(30);
bob.setAge(50); // we set his age to 50

// New Object susan's example:
var susan = new Person(25);
susan.setAge(35);


// Codacedemy's Example:
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here
bob.setAge(50);

// New Object susan's example:
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;
susan.setAge(35);
// similar yet diffrent ways to do the same thing (mine uses a Class)



// Method's Method1 (without Class):
var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  return bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return new Date().getFullYear() - bob.age;
};
bob.setAge(18);

console.log(bob.getYearOfBirth());


// Method's Method2 (with Class):
function Person(age){
  this.age = age;
  this.setAge = function (newAge){
    return bob.age = newAge;
  };
  this.getYearOfBirth = function () {
    return new Date().getFullYear() - bob.age;
  };
};
var bob = new Person(20);
// this time we have added a method, setAge in Person Class
// Untill here: bob.age = 20
bob.setAge(50); // now bob.age = 50

console.log(bob.getYearOfBirth());
// this will log "1966"
