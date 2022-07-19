import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SupportComponent } from './support/support.component';
import { FaqsComponent } from './faqs/faqs.component';
import { RaiseissueComponent } from './raiseissue/raiseissue.component';
import { TrackissueComponent } from './trackissue/trackissue.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TollfreeComponent } from './tollfree/tollfree.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { RechargeaccountComponent } from './rechargeaccount/rechargeaccount.component';
import { TermsandprivacyComponent } from './termsandprivacy/termsandprivacy.component';
import { PleaseverifyComponent } from './pleaseverify/pleaseverify.component';
import { LogoutComponent } from './logout/logout.component';
import { MyinvoicesComponent } from './myinvoices/myinvoices.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminAllFeedbackComponent } from './admin-all-feedback/admin-all-feedback.component';
import { AdminAllIssuesComponent } from './admin-all-issues/admin-all-issues.component';
import { AdminAllInvoicesComponent } from './admin-all-invoices/admin-all-invoices.component';
import { AdminCreatePlanComponent } from './admin-create-plan/admin-create-plan.component';
import { PlansandoffersComponent } from './plansandoffers/plansandoffers.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'support',component:SupportComponent},
  {path:'support/faqs',component:FaqsComponent},
  {path:'support/raiseissue',component:RaiseissueComponent},
  {path:'support/trackissue',component:TrackissueComponent},
  {path:'support/feedback',component:FeedbackComponent},
  {path:'support/tollfree',component:TollfreeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'customer/myaccount',component:MyaccountComponent},
  {path:'customer/rechargeaccount',component:RechargeaccountComponent},
  {path:'termsandprivacy',component:TermsandprivacyComponent},
  {path:'verify_your_account',component:PleaseverifyComponent},
  {path:'logout',component:LogoutComponent},
  {path:'myinvoices',component:MyinvoicesComponent},
  {path:'admindashboard',component:AdminDashBoardComponent},
  {path:'admindashboard/allFeedbacks',component:AdminAllFeedbackComponent},
  {path:'admindashboard/allIssues',component:AdminAllIssuesComponent},
  {path:'admindashboard/allInvoices',component:AdminAllInvoicesComponent},
  {path:'admindashboard/createNewPlan',component:AdminCreatePlanComponent},
  {path:'plansAndOffers',component:PlansandoffersComponent},


  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
