import { Routes, RouterModule } from "@angular/router";
import { TransactionsComponent } from "./transactions/transactions.component";
import { LoginComponent } from "./login/login.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CustomersComponent } from "./customers/customers.component";
import { AccountBalanceComponent } from "./account-balance/account-balance.component";
import { AuthGaurdService } from "./service/auth-gaurd.service";
import { CreateWebuserComponent } from "./create-webuser/create-webuser.component";
import { MiniStatementComponent } from "./mini-statement/mini-statement.component";

const routes: Routes = [
  { path: "transactions", component: TransactionsComponent },
  { path: "customers", component: CustomersComponent },
  { path: "", component: LoginComponent },
  { path: "account-balance", component: AccountBalanceComponent },
  { path: "create-user", component: CreateWebuserComponent },
  { path: "ministatement", component: MiniStatementComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

export const appRoutingModule = RouterModule.forRoot(routes);

// for easy import into app module
export const routedComponents = [
  TransactionsComponent,
  CustomersComponent,
  LoginComponent,
  AccountBalanceComponent,
  CreateWebuserComponent,
  MiniStatementComponent,
];
