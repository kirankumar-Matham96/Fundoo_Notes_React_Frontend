class Auth {
  constructor() {
    // this.authenticated = false;
    this.authenticated = true; //to work freely with dashboard.
  }

  login = (callback) => {
    this.authenticated = true;
    callback();
  };

  logout = (callback) => {
    this.authenticated = false;
    callback();
  };

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
