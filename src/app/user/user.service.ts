import { RestResponse } from './../model/RestResponse.model';
import { UserModel } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public delete(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/deleteUserviaPost', JSON.stringify(user));
  }
}
