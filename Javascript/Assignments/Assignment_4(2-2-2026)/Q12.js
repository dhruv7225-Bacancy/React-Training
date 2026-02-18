// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

// 101
// undefined


// through call ,this in showId refers to agent so 101 printed
// and apply this referes to null so undefined is printed