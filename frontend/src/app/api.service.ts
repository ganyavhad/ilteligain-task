import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  login(data) {
    return this.httpClient.post(
      environment.serverUrl + '/user/login',
      data
    );
  }
  register(data) {
    return this.httpClient.post(
      environment.serverUrl + '/user/register',
      data
    );
  }
}
