function person(name, age, haircolor){
    this.name = name;
    this.age = age;
    this.haircolor = haircolor;
}
person.prototype.sayName = function(){
    console.log("My name is " + this.name);
};

var Ed = new person("Ed", 22, "nocolor");
Ed.sayName();