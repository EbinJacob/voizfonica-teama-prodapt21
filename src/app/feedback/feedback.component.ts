import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Feedback } from '../feedback';
import { FeedbackServiceService } from '../feedback-service.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  alert:boolean=false

  form:FormGroup = new FormGroup({
    call_connectivity: new FormControl(''),
    experience: new FormControl(''),
    customer_support: new FormControl(''),
    value_for_money: new FormControl(''),
    your_opinion: new FormControl('')
  });
  submitted = false;
  feedback:Feedback;
  msg=''
  constructor(public feedbackService: FeedbackServiceService, private formBuilder: FormBuilder) { }
  get f(){
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      call_Connectivity:['', Validators.required],
      experience:['', Validators.required],
      customer_Support:['', Validators.required],
      value_For_Money:['', Validators.required],
      your_Opinion:['', Validators.required]
    })
  }
  submit(){
    this.feedback=this.form.value;
    this.feedbackService.saveFeedback(this.feedback).subscribe(res=>{
      console.log(res);
    })
    this.msg="Thank you for your feedback";
    this.alert=true;
    this.form.reset({});
  }
  closeAlert(){
    this.alert=false;
  }

}
