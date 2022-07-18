import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginstatusService {
  private loginStatus = new BehaviorSubject<boolean>(false);
  private userDetails = new BehaviorSubject<User>({id:0,emailid:'',enabled:false,fullname:'',password:'',currentPlanId:0});
  private currentPlan = new BehaviorSubject<number>(0);
  private adminStatus = new BehaviorSubject<boolean>(false);
  currentLoginStatus = this.loginStatus.asObservable();
  currentUserDetails = this.userDetails.asObservable();
  currentAdminStatus = this.adminStatus.asObservable();
  constructor() { }
  changeLoginStatus(status:boolean){
    this.loginStatus.next(status);
    console.log(this.currentLoginStatus);
  }
  changeUserStatus(userDetails:User){
    this.userDetails.next(userDetails);
    console.log(this.userDetails);
    console.log(this.changeUserStatus);
  }
  setAdminStatus(status:boolean){
    this.adminStatus.next(status);
    console.log("Admin? "+status);
  }
  changeCurrentPlan(newPlanId:number){
    this.currentPlan.next(newPlanId);
  }
}
