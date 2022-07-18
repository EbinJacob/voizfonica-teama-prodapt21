import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private _http:HttpClient) { }
  public saveFeedback(feedback:Feedback){
    return this._http.post<any>("http://localhost:8080/save_feedback",feedback);
  }
  public getAllFeedbacks(){
    return this._http.get<any>("http://localhost:8080/get_all_feedbacks");
  }
}
