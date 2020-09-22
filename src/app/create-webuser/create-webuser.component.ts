import { Component, OnInit } from "@angular/core";
import { User } from "../service/model/User";

@Component({
  selector: "app-create-webuser",
  templateUrl: "./create-webuser.component.html",
  styleUrls: ["./create-webuser.component.css"],
})
export class CreateWebuserComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit() {}
  onSubmit() {
    console.log(this.user);
  }
}
