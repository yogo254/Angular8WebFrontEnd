import { Component, OnInit } from "@angular/core";
import { User } from "../service/model/User";
import { AuthService } from "../service/AuthService";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user = new User();
  isLoginFailed = false;
  errorMessage = "";
  roles = "";
  isLoggedIn = false;
  constructor(private auth: AuthService) {}

  onSubmit() {
    this.auth.loginUser(this.user.username, this.user.password);
  }

  ngOnInit() {}
}
