import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  user: any;

  constructor() {}

  logInUser() {
    this.user = {
      username: "paul",
      email: "paul@outcode.dev"
    };
    return this.user;
  }

  isAuthenticated() {
      return !!this.user;
  }

  getUser() {
    return this.user;
  }
}
