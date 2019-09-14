import { Component } from "@angular/core";
import { AuthService } from "../../common/auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styles: [``]
})
export class LoginComponent {
  user = {
    email: undefined,
    password: undefined
  };
  authService: any;
  route: any;

  constructor(authService: AuthService, route: Router) {
    this.authService = authService;
    this.route = route;
  }

  logInUser() {
    this.authService.logInUser(this.user);
    this.route.navigate(["/"]);
  }
}
