class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course has been launched by ${this.username}`);
    }
}

const sahil = new Teacher("Sahil", "sahil@gmail.com", "234")
sahil.addCourse()

const rutu = new User("Rutu")
// rutu.addCourse()
rutu.logMe()
sahil.logMe()

console.log(sahil instanceof User);         //True
console.log(sahil instanceof Teacher);      //True
