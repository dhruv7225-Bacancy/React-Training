
// Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();
//undefined

// function is referenced through object but not called on object user so this keyword refer to global