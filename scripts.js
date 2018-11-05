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