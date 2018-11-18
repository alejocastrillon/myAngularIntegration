import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../model/RestResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  public saveorUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/saveOrUpdate', JSON.stringify(user));
  }
}
