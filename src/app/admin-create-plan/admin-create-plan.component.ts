import { Component, OnInit } from '@angular/core';
import { RechargeServiceService } from '../recharge-service.service';
import { RechargePlan } from '../recharge-plan';

@Component({
  selector: 'app-admin-create-plan',
  templateUrl: './admin-create-plan.component.html',
  styleUrls: ['./admin-create-plan.component.css']
})
export class AdminCreatePlanComponent implements OnInit {
  plan: RechargePlan;
  constructor(private service: RechargeServiceService) { }

  ngOnInit(): void {
  }
  inputOffer(data: RechargePlan) {
    this.service.addPlan(data);
    console.log(data);
  }

}
