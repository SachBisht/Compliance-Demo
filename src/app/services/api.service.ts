import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})
export class ApiService {
baseUrl = 'http://localhost:8008/';
constructor(private _http: HttpClient) {
}
getTypeRequest(url) {
return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
return res;
}));
}

loginPost(url, payload) {
return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
return res;
}));
}

postTypeRequest(url, payload, token) {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
return this._http.post(`${this.baseUrl}${url}`, payload, httpOptions).pipe(map(res => {
return res;
}));
}
putTypeRequest(url, payload) {
return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
return res;
}));
}
}
