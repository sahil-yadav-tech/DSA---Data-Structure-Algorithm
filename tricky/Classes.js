class User{
    constructor(name, age, balanace){
        this.name = name
        this.age= age
        this.balanace = balanace
    }

    deposite(amount){
        this.balanace += amount
    }

    withdraw(amount){
        this.balanace -= amount
    }

    get balanaceValue(){
        return this.balanace
    }
}

class Begger extends User{
    constructor(name, work){
        super(name)
        super.deposite(45)
    }
}

const user1 = new User("sahil",22, 0)
console.log(user1);

// user1.deposite(8000000000000)
// console.log(user1);
// user1.withdraw(1)
// console.log(user1);
// console.log(user1.balanaceValue);


const Begger1 = new Begger("sahil","IT DEVELOPER")
console.log(Begger1, "Begger1");

