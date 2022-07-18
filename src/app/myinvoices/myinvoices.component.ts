import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginstatusService } from '../loginstatus.service';
import { RechargeServiceService } from '../recharge-service.service';

@Component({
  selector: 'app-myinvoices',
  templateUrl: './myinvoices.component.html',
  styleUrls: ['./myinvoices.component.css']
})
export class MyinvoicesComponent implements OnInit {
  currentUserId: number;
  invoices = null;

  constructor(private _service: RechargeServiceService, private loginstatusservice: LoginstatusService, private _router: Router) {
    this.loginstatusservice.currentUserDetails.subscribe(user => {
      this.currentUserId = user.id;
    })
    this._service.getUserInvoice(this.currentUserId).subscribe(res => {
      this.invoices = res;
    })
  }
  getPlanName(planId: number) {
    //this._service.getPlanById(planId).subscribe(res => {
    //  return res.planName;
    //})
    console.log("getPlanName: "+planId);
  }
  getPlanValidity(planId: number) {
    this._service.getPlanById(planId).subscribe(res => {
      return res.planValidity;
    })
  }

  ngOnInit(): void {
  }

}
