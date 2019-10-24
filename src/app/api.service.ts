import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  API_KEY = "e391097376e845fe86faaf0a20c3a6e4";
  getNews() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${
        this.API_KEY
      }`
    );
  }
}
