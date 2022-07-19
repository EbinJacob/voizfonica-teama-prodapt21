import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RechargePlan } from './recharge-plan';

@Injectable({
  providedIn: 'root'
})
export class RechargeServiceService {

  constructor(private _http : HttpClient) { }

  public getPlanByServiceType(serviceType: String):Observable<any>{
    return this._http.get<any>("http://localhost:8080/get_plan_by_serviceType/"+serviceType);
  }
  public getPlanById(planId: number):Observable<any>{
    console.log('planId is '+planId)
    return this._http.get<any>("http://localhost:8080/get_plan_by_id/"+planId)
  }
  public rechargeAccount(planId: number, userId:number):Observable<any>{
    let params = new HttpParams()
      .set("planId",planId)
      .set("userId",userId)
    return this._http.post<any>("http://localhost:8080/recharge",params);
  }
  public getUserInvoice(userId: number):Observable<any>{
    return this._http.get<any>("http://localhost:8080/my_invoices/"+userId)
  }
  public getAllInvoices():Observable<any>{
    return this._http.get<any>("http://localhost:8080/getAllInvoices");
  }
  public addPlan(plan:RechargePlan):Observable<any>{
    
    return this._http.post<any>("http://localhost:8080/add_plan",plan);
  }
}
