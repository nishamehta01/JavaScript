const user = {
    username: "Nisha",
    price: 999,

    welcomMessage: function() {
        console.log(`${this.username} , welcome to website`);
        
    }
}

user.welcomMessage()
user.username = "nish"
user.welcomMessage()