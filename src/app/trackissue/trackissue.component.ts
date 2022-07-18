import { Component, OnInit } from '@angular/core';
import { LoginstatusService } from '../loginstatus.service';
import { UserIssueService } from '../user-issue.service';

@Component({
  selector: 'app-trackissue',
  templateUrl: './trackissue.component.html',
  styleUrls: ['./trackissue.component.css']
})
export class TrackissueComponent implements OnInit {
issues=null;
currentUserId:number=0;
  constructor(private _service: UserIssueService, private loginstatusservice: LoginstatusService) {
    this.loginstatusservice.currentUserDetails.subscribe(res=>{
      this.currentUserId=res.id;
    })
    this._service.getIssuesByUserId(this.currentUserId).subscribe(res=>{
      this.issues=res;
    });
   }
  
  ngOnInit(): void {
  }
  getStatus(active:boolean){
    if(active===true){
      return "Under process. Will be resolved soon";
    }
    else{
      return "Resolved";
    }
  }
}
