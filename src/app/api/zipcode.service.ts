import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ZipcodeService {
  serviceUrl = " https://api-sepomex.hckdrk.mx/query/info_cp/";

  constructor(private httpClient: HttpClient) {}

  getNeighborhoodsByZipcode = (zipcode: string) => {
    return this.httpClient.get(this.serviceUrl + zipcode, {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    });
  };
}
