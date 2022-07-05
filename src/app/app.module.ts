import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
