import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Issue } from '../issue';
import { UserIssueService } from '../user-issue.service';
import { LoginstatusService } from '../loginstatus.service';

@Component({
  selector: 'app-raiseissue',
  templateUrl: './raiseissue.component.html',
  styleUrls: ['./raiseissue.component.css']
})
export class RaiseissueComponent implements OnInit {
  alert:boolean=false

  form:FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile_No: new FormControl(''),
    plan: new FormControl(''),
    description: new FormControl(''),
    userId: new FormControl(''),
    active: new FormControl('')
  });
  submitted = false;
  issue:Issue;
  msg=''
  constructor(public issueService: UserIssueService, private formBuilder: FormBuilder, private loginstatusservice:LoginstatusService) { }
  get f(){
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z\s]{2,30}')]],
      email: ['',[Validators.required, Validators.email]],
      mobile_No: ['', [Validators.required, Validators.pattern('[6789][0-9]{9}')]],
      plan: ['', Validators.required],
      description: ['', Validators.required],
      // userId:['', Validators.required]
    });
  }
  submit(){
    console.log(this.form.value);
    this.issue=this.form.value;
    this.loginstatusservice.currentUserDetails.subscribe(res=>{
      this.issue.userId=res.id;
      this.form.value.userId=res.id;
    })
    this.form.value.active=true;
    console.log(this.issue);
    
    this.issueService.create(this.issue).subscribe((res:any)=>{
      console.log(res)
      this.msg='Issue raised successfully. We will resolve it at the earliest.'
      this.alert=true
      this.form.reset({})
     })
  }
  closeAlert(){
    this.alert=false
  }
}
