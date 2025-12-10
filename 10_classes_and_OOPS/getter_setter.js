class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    // We dont use return in setter

    get password(){
        return `${this._password}sahil`
    }
    set password(value){
        this._password = value 
    }
}

const Sahil = new User("sahil@gmail.com", "rutu")
console.log(Sahil.password);
console.log(Sahil.email);
