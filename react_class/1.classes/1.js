class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log("hey my name is " + this.name + "i am " + this.age);
    }
}
const person1 = new person("demi", 18);
person1.introduce();

