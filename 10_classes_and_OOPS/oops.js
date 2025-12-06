const user = {
    username : "Sahil",
    loginCount : 8,
    isLoggedIn : true,

    getUserDeatails : function() {
        // console.log("Got user details from the database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user["username"]);
// console.log(user.getUserDeatails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = () => {
        console.log(`Welcome: ${this.username}`)
    }
    return this    // Even if we dont write it will not create any affect
}

// const userOne = User("Sahil", 12, true)
// const userTwo = User("Rutuja", 10, false)

// If we do this than it overwrite the values we must use new 

const userOne = new User("Sahil", 12, true)
const userTwo = new User("Rutu", 10, false)
// console.log(userOne);
console.log(userTwo.greetings());

// As we use the new keyWord a new object is created which is called instance 