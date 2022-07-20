import { Component, OnInit } from '@angular/core';
import { RechargeServiceService } from '../recharge-service.service';
import { RechargePlan } from '../recharge-plan';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-create-plan',
  templateUrl: './admin-create-plan.component.html',
  styleUrls: ['./admin-create-plan.component.css']
})
export class AdminCreatePlanComponent implements OnInit {
  plan: RechargePlan;
  offerform:FormGroup = new FormGroup({
    serviceType: new FormControl(' '),
    planName: new FormControl(' '),
    planCost:new FormControl(' '),
    planValidity:new FormControl(' ')
  })
  constructor(private service: RechargeServiceService, private formBuilder: FormBuilder) {}
  get f(){
    return this.offerform.controls;
  }

  ngOnInit(): void {
    this.offerform = this.formBuilder.group({
      serviceType:['',Validators.required],
      planName: ['',Validators.required],
      planCost: ['',Validators.required],
      planValidity: ['',Validators.required]
    })
  }
  submit() {
    console.log(this.offerform.value);
    this.plan=this.offerform.value;
    this.service.addPlan(this.plan).subscribe(res=>{
      console.log(res);
    })
    this.offerform.reset({});
  }

}

