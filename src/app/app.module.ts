import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { appRoutingModule, routedComponents } from "./app-routing.module";
import { CustomerService } from "./service/CustomerService";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "./service/AuthService";
import { SearchService } from "./service/SearchService";
import { Search } from "./seaarch/search.component";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, routedComponents, Search],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    appRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService, SearchService, CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
