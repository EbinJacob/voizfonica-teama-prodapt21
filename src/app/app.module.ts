import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { SupportComponent } from './support/support.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqsComponent } from './faqs/faqs.component';
import { RaiseissueComponent } from './raiseissue/raiseissue.component';
import { TrackissueComponent } from './trackissue/trackissue.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TollfreeComponent } from './tollfree/tollfree.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlansandoffersComponent } from './plansandoffers/plansandoffers.component';
import { TermsandprivacyComponent } from './termsandprivacy/termsandprivacy.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { RechargeaccountComponent } from './rechargeaccount/rechargeaccount.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PleaseverifyComponent } from './pleaseverify/pleaseverify.component';
import { LogoutComponent } from './logout/logout.component';
import { MyinvoicesComponent } from './myinvoices/myinvoices.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminAllFeedbackComponent } from './admin-all-feedback/admin-all-feedback.component';
import { AdminAllIssuesComponent } from './admin-all-issues/admin-all-issues.component';
import { AdminAllInvoicesComponent } from './admin-all-invoices/admin-all-invoices.component';
import { AdminCreatePlanComponent } from './admin-create-plan/admin-create-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CustomerComponent,
    SupportComponent,
    FaqsComponent,
    RaiseissueComponent,
    TrackissueComponent,
    FeedbackComponent,
    TollfreeComponent,
    AboutusComponent,
    PlansandoffersComponent,
    TermsandprivacyComponent,
    MyaccountComponent,
    RechargeaccountComponent,
    PleaseverifyComponent,
    LogoutComponent,
    MyinvoicesComponent,
    AdminDashBoardComponent,
    AdminAllFeedbackComponent,
    AdminAllIssuesComponent,
    AdminAllInvoicesComponent,
    AdminCreatePlanComponent,
    SliderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
