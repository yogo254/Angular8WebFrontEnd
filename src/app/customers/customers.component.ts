import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/AuthService";
import { CustomerService } from "../service/CustomerService";
import { Account } from "../service/model/Account";
import { CustomerAccount } from "../service/model/CustomerAcount";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  searchString = "Search By Customer ID";
  customers: Array<CustomerAccount> = [];
  page;

  constructor(
    private auth: AuthService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    console.log(this.auth.getAuthToken());
    this.customerService
      .getCustomers(this.auth.getAuthToken())
      .subscribe((data: Array<Account>) => {
        let c = [];
        data.map((account) => {
          this.customerService
            .getCustomer(this.auth.getAuthToken(), account.customerId)
            .subscribe((cust) => {
              c.push({ customer: cust, account });
            });
        });
        this.customers = c;
      });
  }
}
