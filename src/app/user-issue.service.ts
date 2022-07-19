import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class UserIssueService {

  constructor(private _http: HttpClient) { }
  public create(issue:Issue):Observable<any>{
    return this._http.post<any>("http://localhost:8080/insert_issue",issue);
  }
  public getAllIssues():Observable<any>{
    return this._http.get<any>("http://localhost:8080/fetch_all_issues");
  }
  public getIssuesByUserId(userId:number):Observable<any>{
    return this._http.get<any>("http://localhost:8080/fetch_issue_by_id/"+userId);
  }
  public resolveIssue(id:number){
    return this._http.put("http://localhost:8080/resolve",id);
  }
}
