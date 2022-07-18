import { Component, OnInit } from '@angular/core';
import { LoginstatusService } from './loginstatus.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'voizfonica';
  user!:any;
  loginStatus:boolean=false;
  adminStatus:boolean=false;
  namevar:string | undefined;
  constructor(private loginStatusService:LoginstatusService) {
    this.loginStatusService.currentLoginStatus.subscribe(item=>{
      console.log(item);
      this.loginStatus=item;
    })
    this.loginStatusService.currentUserDetails.subscribe(res=>{
      console.log(res);
      this.namevar=res.fullname;
      if(res.emailid==="admin@voizfonica.com"){
        this.adminStatus=true;
      }
      else{
        this.adminStatus=false;
      }
      this.user=res;
    })
  }

  ngOnInit():void{

  }

  isAdmin():boolean{
    if(this.user?.fullname==='ADMIN'){
      this.adminStatus=true;
      return true;
    }
    else{
      this.adminStatus=false;
      return false;
    }
  }
}
