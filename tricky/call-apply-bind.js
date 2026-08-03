function greet() {
    console.log(this.name);
}

const user = {
    name: "Rahul"
};

const bound = greet.bind(user);
console.log(bound, );


bound();
