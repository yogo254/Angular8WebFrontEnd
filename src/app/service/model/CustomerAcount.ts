import { Account } from "./Account";
import { Customer } from "./Customer";
export class CustomerAccount {
  account: Account;
  customer: Customer;
  constructor(account: Account, customer: Customer) {}
}
