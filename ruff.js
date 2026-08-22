function userdetails(){
    console.log(`${this.userId} ${this.name}`);
}

let obj = {
    userId:1,
    name:"sahil"
}
userdetails.call(obj)
