import { Component, OnInit } from '@angular/core';
import { UserIssueService } from '../user-issue.service';

@Component({
  selector: 'app-admin-all-issues',
  templateUrl: './admin-all-issues.component.html',
  styleUrls: ['./admin-all-issues.component.css']
})
export class AdminAllIssuesComponent implements OnInit {
  issues=null;
  constructor(private service:UserIssueService) {
    this.service.getAllIssues().subscribe(res=>{
      this.issues=res;
    })
  }

  ngOnInit(): void {
  }
  getIssueStatusMessage(active:boolean){
    if(active===true){
      return "Active";
    }
    else{
      return "Resolved"
    }
  }
  markResolved(id:number){
    console.log(this.service.resolveIssue(id));
  }
}
