import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../feedback-service.service';

@Component({
  selector: 'app-admin-all-feedback',
  templateUrl: './admin-all-feedback.component.html',
  styleUrls: ['./admin-all-feedback.component.css']
})
export class AdminAllFeedbackComponent implements OnInit {
  feedbacks=null;
  constructor(private _service:FeedbackServiceService) {
    this._service.getAllFeedbacks().subscribe(res=>{
      this.feedbacks=res;
    })
  }

  ngOnInit(): void {
  }

}
