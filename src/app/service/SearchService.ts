import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable()
export class SearchService {
  searchString: String;

  constructor(private http: HttpClient) {}

  setSearchString(search: String) {
    this.searchString = search;
  }
  getSearchString() {
    return this.searchString;
  }

  searchAccountByAccountNo(token: String, accountNo: String) {
    var header = {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`),
    };

    return this.http.get(
      `${environment.BASE_URL}/accounts/${accountNo}`,
      header
    );
  }
}
