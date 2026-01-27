const user =  {
  username : "Arshad ali",
  isLoggedIn : false,

  Login()  {
    this.isLoggedIn = true;
    console.log(`${this.username} , has been Logged In`);
  },
  Logout() {
    this.isLoggedIn = false;
    console.log(`${this.username} , Has been Logged Out`);
  }
};

user.Login();
user.Logout();