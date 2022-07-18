import { Component, OnInit } from '@angular/core';
import { RechargeServiceService } from '../recharge-service.service';

@Component({
  selector: 'app-admin-all-invoices',
  templateUrl: './admin-all-invoices.component.html',
  styleUrls: ['./admin-all-invoices.component.css']
})
export class AdminAllInvoicesComponent implements OnInit {
  bills=null
  constructor(private service:RechargeServiceService) {
    this.service.getAllInvoices().subscribe(res=>{
      this.bills=res;
    })
   }

  ngOnInit(): void {
  }

}
