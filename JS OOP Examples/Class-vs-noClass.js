// An Object (Example without use of a Class):
var john = {
  name: "John Doe",
  favLang: "Java",
  greet: function(){
    console.log("Hello my name is " + john.name +
    "and my favourite programming language is " + john.favLang),
  };
}

// Another object:
var bob = {
  name: "Bob the Builder",
  favLang: "C",
  greet: function(){
    console.log("Hello my name is " + bob.name +
    "and my favourite programming language is " + bob.favLang);
  };
}
// Not DRY code


// examples with Class
function Person(name, favLang) {
  this.name = name;
  this.favLang = favLang;
  this.greet = function() {
    console.log("Hello my name is " + this.name +
    "and my favourite programming language is " + this.favLang);
  }
}
// can be used to create many classes using this Class

var john = new Person("John Doe", "Java");
john.greet();

var bob = new Person("Bob the Builder", "C");
bob.greet();
