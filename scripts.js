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
};//class constructor for Person

sayHello = function(object) {
    console.log(`Hey! My name is ${object.name} I am ${object.age} years old and I live in ${object.state}.`);
};//logs string to console

person1 = new Person('Noreen', 50, 'Arizona');
sayHello(person1);

person2 = new Person('Shannon', 33, 'Colorado');
sayHello(person2);

person3 = new Person('Steph', 27, 'Colorado');
sayHello(person3);

person4 = new Person('Tristan', 15, 'Colorado');
sayHello(person4);

person5 = new Person('Gavine', 18, 'California');
sayHello(person5);

class Family {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    };
    sayHello() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and I live in ${this.city}.`);
    };
};//ES6 class

person1 = new Family('Noreen', 'Chandler', 50);
person1.sayHello();

person2 = new Family('Shannon', 'Denver', 33);
person2.sayHello();

person3 = new Family('Steph', 'Denver', 27);
person3.sayHello();

person4 = new Family('Tristan', 'Colorado Springs', 15);
person4.sayHello();

person5 = new Family('Gavine', 'Los Angeles', 18);
person5.sayHello();

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
            console.log(`This is a vehicle, made by ${this.manufacturer}, that has ${this.wheels} wheels.`)
    };
};

let truckBed = false;

class Truck extends Vehicle {
    constructor(manufacturer, wheels, doors, hasBed) {
        super(manufacturer, wheels);
        this.doors = doors;
        Boolean = hasBed;
    }
    aboutVehicle() {
        console.log(`This is a truck, made by ${this.manufacturer}, that has ${this.wheels} wheels, ${this.doors} doors, and a truck bed.`)
    }
};

let colorado = new Truck('Chevy', 4, 4, true);
colorado.aboutVehicle();