class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`); 
    }

    static createId(){
        return `123`
    }
}

const sahil = new User("Sahil")
// console.log(sahil.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const rutu = new Teacher("Rutu", "rutu@gmail.com")
rutu.logMe()
console.log(rutu.createId());