class User {
  name;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
//   set userNameChaneg(pagel) {
//     this.name = pagel;
//     console.log(name);
//   }

    speak() {
    console.log("Animal speaks");
  } 

}

class Student extends User{
    speak(){
        console.log("Animal  twooooo speaks");
    }
}

let user = new User("sahil", 15);
Student.speak()
// user.userNameChaneg();
console.log(user, "User");
