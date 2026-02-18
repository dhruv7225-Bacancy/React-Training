// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();
//undefined

// this in arrow function refers to its parent function declaration/expression scope but here it is not wrapped in any function so it points to global and print undefined
