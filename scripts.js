let person1 = {
    name: 'Noreen',
    sayHello: function() {
        console.log(`Hello! my name is ${this.name}.`);
    }
};

person1.sayHello();//calls sayHello for person1 using `name`

let person2 = {
    name: 'Shannon',
    sayHello: function() {
        console.log(`Hello! my name is ${this.name}.`);
    }
};

person2.sayHello();//calls sayHello for person2 using `name`

let person3 = {
    name: 'Steph',
    sayHello: function() {
        console.log(`Hello! my name is ${this.name}.`);
    }
};

person3.sayHello();//calls sayHello for person3 using `name`

let person4 = {
    name: 'Tristan',
    sayHello: function() {
        console.log(`Hello! my name is ${this.name}.`);
    }
};

person4.sayHello();//calls sayHello for person4 using `name`

let person5 = {
    name: 'Gavine',
    sayHello: function() {
        console.log(`Hello! my name is ${this.name}.`);
    }
};

person5.sayHello();//calls sayHello for person5 using `name`

function Person(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
};

sayHello = function(object) {
    console.log(`Hey! My name is ${object.name} I am ${object.age} years old and I live in ${object.state}.`);
}

person1 = new Person('Noreen', 50, 'Arizona');
sayHello(person1);

person2 = new Person('Shannon', 30, 'Colorado');
sayHello(person2);

person3 = new Person('Steph', 27, 'Colorado');
sayHello(person3);

person4 = new Person('Tristan', 15, 'Colorado');
sayHello(person4);

person5 = new Person('Gavine', 18, 'California');
sayHello(person5);