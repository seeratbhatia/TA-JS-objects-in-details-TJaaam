- Pseudoclassical Pattern

``js
createAnimal.prototype = {
    eat: function () {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary: function () {
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    },

}; 

function CreateAnimal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
   
}

function CreateDog(location, numberOfLegs, name, color) {
    CreateAnimal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;
    
}

createDog.prototype = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(name) {
        this.name = name;
        return this.name;
    },
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    },
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`

    },
};

Object.setPrototypeOf(createDog.prototype, createAnimal.prototype);


function CreateCat(location, numberOfLegs, name, colorOfEyes) {
   createAnimal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = colorOfEyes;
    return obj;
}

CreateCat.prototype = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(name) {
        this.name = name;
        return this.name;
    },
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`

    },
};
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

``
class pattern 

``js 

class Animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
    }
    summary() {
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    }

}
class Dog extend Animal {
    constructor(location, numberOfLegs, name, color) {

    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
}
bark() {
   alert(`I am ${this.name} and I can bark 🐶`);
}
changeName(name) {
    this.name = name;
    return this.name;
    }
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    }
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`

    }
}


class Cat extend Animal {
constructor(location, numberOfLegs, name, colorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = colorOfEyes;

}
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(name) {
        this.name = name;
        return this.name;
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`

    }
}

``