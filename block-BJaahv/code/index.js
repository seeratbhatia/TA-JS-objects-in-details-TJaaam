
function createUser(name, id, noOfProjects) {
    let user = {};
    user.name = name;
    user.id = id ;
    user.noOfProjects = noOfProjects;
    user.getprojects - function () {
        return user,noOfProjects;
    };
    user.changeName = function (newName) {
        let prevName = user.name;
        user.name = newName;
        return prevName;

};
user.incrementProject = function () {
    user.noOfProjects += 1;
    return user.noOfProjects;
};
user.incrementProject = function () {
    user.noOfProjects += 1;
    return user.noOfProjects;
};
user.decrementProject = function () {
    user.noOfProjects -= 1;
    return user.noOfProjects;
};
return user;
}

let aman = createUser("Aman", 123, 23);
let john = createUser("John", 1, 100);
console.group("Aman");
console,log(aman.name);
console.log(aman.id);
console.log(aman.incrementProject());
console.log(aman.decrementProject());
console.log(aman.changeName("Sunny"));
console.groupEnd();

console.group("john");
console,log(john.name);
console.log(john.id);
console.log(john.incrementProject());
console.log(john.decrementProject());
console.log(john.changeName("Bran"));
console.log(john.name);
console.groupEnd();

//prototypal

let userMethods = {
    getProjects: function () {
        return this.noOfProjects;
    },
changeName = function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;

},
incrementProject = function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
},

decrementProject = function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
},
};

function createUser(name, id, noOfProjects) {
    let user = Object.create(userMethods);
    user.name = name;
    user.id = id ;
    user.noOfProjects = noOfProjects;

    return user;
    
}

let aman = createUser("Aman", 123, 23);
let john = createUser("John", 1, 100);

console.group("Aman");
console,log(aman.name);
console.log(aman.id);
console.log(aman.incrementProject());
console.log(aman.decrementProject());
console.log(aman.changeName("Sunny"));
console.groupEnd();

console.group("john");
console,log(john.name);
console.log(john.id);
console.log(john.incrementProject());
console.log(john.decrementProject());
console.log(john.changeName("Bran"));
console.log(john.name);
console.groupEnd();

// pseudoclassical method

CreateUser.prototype = {
    getProjects: function () {
        return this.noOfProjects;
    },
changeName = function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;

},
incrementProject = function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
},

decrementProject = function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
},
};

function CreateUser(name, id, noOfProjects) {
    
    this.name = name;
    this.id = id ;
    this.noOfProjects = noOfProjects;
    
}

let aman = new CreateUser("Aman", 123, 23);
let john = new CreateUser("John", 1, 100);

console.group("Aman");
console,log(aman.name);
console.log(aman.id);
console.log(aman.incrementProject());
console.log(aman.decrementProject());
console.log(aman.changeName("Sunny"));
console.groupEnd();

console.group("john");
console,log(john.name);
console.log(john.id);
console.log(john.incrementProject());
console.log(john.decrementProject());
console.log(john.changeName("Bran"));
console.log(john.name);
console.groupEnd();

// class pattern


class CreateUser {
    constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id ;
    this.noOfProjects = noOfProjects;
    
}
getProjects () {
    return this.noOfProjects;
}
changeName (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;

}
incrementProject () {
    this.noOfProjects += 1;
    return this.noOfProjects;
}

decrementProject() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
}
}


let aman = new CreateUser("Aman", 123, 23);
let john = new CreateUser("John", 1, 100);

console.group("Aman");
console,log(aman.name);
console.log(aman.id);
console.log(aman.incrementProject());
console.log(aman.decrementProject());
console.log(aman.changeName("Sunny"));
console.groupEnd();

console.group("john");
console,log(john.name);
console.log(john.id);
console.log(john.incrementProject());
console.log(john.decrementProject());
console.log(john.changeName("Bran"));
console.log(john.name);
console.groupEnd();









