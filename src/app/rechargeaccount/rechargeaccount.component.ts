import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ɵgetUnknownElementStrictMode } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../invoice';
import { LoginstatusService } from '../loginstatus.service';
import { RechargePlan } from '../recharge-plan';
import { RechargeServiceService } from '../recharge-service.service';
import { User } from '../user';

@Component({
  selector: 'app-rechargeaccount',
  templateUrl: './rechargeaccount.component.html',
  styleUrls: ['./rechargeaccount.component.css']
})
export class RechargeaccountComponent implements OnInit {
  userid:number;
  currentuseremail='';
  currentplanId:number;
  currentplanDesc:string;
  chosenplanid:number=0;
  postpaid=null;
  prepaid=null;
  dongle=null;
  curplanmsg='';
  actualpass=''
  statusmsg='';
  identityFlag:boolean=false;
  PASSWORD: string="";

  PLANID:number;
  SERVICETYPE:string;
  PLANNAME:string;
  PLANCOST:number;
  PLANVAL:number;

  constructor(private _service: RechargeServiceService, private _router: Router, private loginStatusService: LoginstatusService) {
    this.loginStatusService.currentUserDetails.subscribe(res=>{
      this.userid=res.id;
      this.currentplanId=res.currentPlanId;
      this.currentuseremail=res.emailid;
    })
    this._service.getPlanByServiceType("PREPAID").subscribe(res=>{
      this.prepaid=res;
    })
    this._service.getPlanByServiceType("POSTPAID").subscribe(res=>{
      this.postpaid=res;
    })
    this._service.getPlanByServiceType("DONGLE").subscribe(res=>{
      this.dongle=res;
    })
    this._service.getPlanById(this.currentplanId).subscribe(res=>{
      this.currentplanDesc=res.planName;
      this.curplanmsg+='Your current plan is: ';
      this.curplanmsg+=this.currentplanDesc;
      this.curplanmsg+='. (Validity: ';
      this.curplanmsg+=res.planValidity;
      this.curplanmsg+=' days)';
    })

  }
  
  setChosenPlanId(planId:number){
    this.chosenplanid=planId;
    this._service.getPlanById(planId).subscribe(res=>{
      this.PLANID=res.planId;
      this.SERVICETYPE=res.serviceType;
      this.PLANNAME=res.planName;
      this.PLANCOST=res.planCost;
      this.PLANVAL=res.planValidity;
    })
  }

  rechargeNow(){
    this._service.rechargeAccount(this.chosenplanid,this.userid).subscribe(res=>{
      if(res===null){
        this.statusmsg='Recharge process failed. Please try again.'
      }
      else{
        this.statusmsg='Recharge successfull. Please check your invoices tab for details'
        this.loginStatusService.changeCurrentPlan(this.chosenplanid);
      }
    })
  }
  

  ngOnInit(): void {
  }
  
  }

