import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../common/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: [``]
})
export class NavBarComponent implements OnInit {
  user: any;
  auth: any;

  constructor(authService: AuthService) {
    this.auth = authService;
  }

  ngOnInit() {
    this.user = this.auth.getUser();
  }
}
