import { Component, OnInit, OnChanges } from "@angular/core";
import { Account } from "../service/model/Account";
import { SearchService } from "../service/SearchService";
import { AuthService } from "../service/AuthService";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-account-balance",
  templateUrl: "./account-balance.component.html",
  styleUrls: ["./account-balance.component.scss"],
})
export class AccountBalanceComponent implements OnInit, OnChanges {
  account = new Account();

  constructor(
    private searchService: SearchService,
    private auth: AuthService
  ) {}

  ngOnInit() {}
  onSearchString(event) {
    console.log(event);
    if (event) {
      this.searchService
        .searchAccountByAccountNo(this.auth.getAuthToken(), event)
        .subscribe((data) => {
          this.account = <Account>data;
        });
    }
  }
}
