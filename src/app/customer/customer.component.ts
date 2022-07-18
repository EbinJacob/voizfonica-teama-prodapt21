import { Component, OnInit } from '@angular/core';
import { LoginstatusService } from '../loginstatus.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  user!:any;
  loginStatus:boolean=false;
  namevar:string | undefined;
  constructor(private loginStatusService:LoginstatusService) {
    this.loginStatusService.currentLoginStatus.subscribe(item=>{
      
      this.loginStatus=item;
    })
    this.loginStatusService.currentUserDetails.subscribe(res=>{
      
      this.namevar=res.fullname;
      this.user=res;
    })
  }
  ngOnInit(): void {
    
  }
}
