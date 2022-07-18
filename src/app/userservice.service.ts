import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private user=new BehaviorSubject<any>(localStorage.getItem('user'));
  constructor(private httpClient:HttpClient) { }
  login(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:8080/login",user);
  }
  logout():Observable<any>{
    return this.httpClient.delete("http://localhost:8080/user/logout");
  }
  get currentUserName()
  {
    return this.user.asObservable();
  }
}
