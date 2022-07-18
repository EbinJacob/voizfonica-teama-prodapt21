import { Component, OnInit } from '@angular/core';
import { LoginstatusService } from '../loginstatus.service';
import { RechargePlan } from '../recharge-plan';
import { RechargeServiceService } from '../recharge-service.service';
import { User } from '../user';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  msg=''
  user!:any;
  loginStatus:boolean=false;
  namevar:string;
  emailvar:string;
  idvar:number;
  calledPlan:RechargePlan
  planidvar: number=0;
  plannamevar: string='NA';
  planvalidityvar: number=0;
  plancostvar:number=0;
  servicetypevar:string='NA';

  constructor(private loginStatusService:LoginstatusService,private rechargeService: RechargeServiceService) {
    this.loginStatusService.currentLoginStatus.subscribe(item=>{
      this.loginStatus=item;
    })
    this.loginStatusService.currentUserDetails.subscribe(res=>{
      console.log('Res: '+res.fullname)
      console.log('Res planid:'+res.currentPlanId)
      this.namevar=res.fullname;
      this.emailvar=res.emailid;
      this.idvar=res.id;
      this.planidvar=res.currentPlanId;
      console.log('planid in myaccount comp '+res.currentPlanId)
      this.user=res;
      if(res.currentPlanId===null){
        this.msg="No active plans. Please recharge!";
      }
    })
    this.rechargeService.getPlanById(this.planidvar).subscribe(plan=>{
      this.plannamevar = plan.planName;
      this.planvalidityvar = plan.planValidity;
      this.plancostvar = plan.planCost;
      this.servicetypevar = plan.serviceType;
    })
  }
  ngOnInit(): void {
    
  }
}
