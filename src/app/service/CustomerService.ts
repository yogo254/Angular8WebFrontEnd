import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(token: String) {
    var header = {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`),
    };

    return this.http.get(`${environment.BASE_URL}/accounts/`, header);
  }
  getCustomer(token: String, customerId: String) {
    var header = {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`),
    };

    return this.http.get(
      `${environment.BASE_URL}/customers/${customerId}`,
      header
    );
  }
}
