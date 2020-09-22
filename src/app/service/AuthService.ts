import { Injectable } from "@angular/core";
import { User } from "./model/User";
import axios from "axios";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthService {
  currentUser: User;
  constructor(private router: Router, private http: HttpClient) {}

  loginUser(username: String, password: String) {
    axios
      .post("http://localhost:8595/springboot-rest-api/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.headers.authorization) {
          sessionStorage.setItem(
            environment.TOKEN_KEY,
            res.headers.authorization
          );

          this.router.navigate(["/customers"]);
        }
      })
      .catch((err) => {});
  }
  updateCurrentUser(user: User) {
    this.currentUser = user;
  }
  getAuthToken() {
    const token = sessionStorage.getItem(environment.TOKEN_KEY);
    return token;
  }
  createUser(token: String, user: User) {
    var header = {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`),
    };

    return this.http.post(
      `${environment.BASE_URL}/webusers/create`,
      user,
      header
    );
  }
}
