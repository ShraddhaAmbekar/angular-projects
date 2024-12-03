import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  url='http://localhost:3000'
  constructor(private http : HttpClient) {}
  postApiCall(endpoint:any,form:any){
    let url=this.url+'/'+ endpoint
    return this.http.post(url,form)
  }
  getApiCall(endpoint:any){
    let url=this.url+'/'+ endpoint
    return this.http.get(url)
  }
}
