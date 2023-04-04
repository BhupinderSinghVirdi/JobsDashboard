import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TickmarkComponent } from './components/tickmark/tickmark.component';
import { JobapplicationformComponent } from './components/jobapplicationform/jobapplicationform.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobDetailsDescriptionComponent } from './components/job-details-description/job-details-description.component';
import { JobDetailsHeaderComponent } from './components/job-details-header/job-details-header.component';
import { JobDetailsSummaryComponent } from './components/job-details-summary/job-details-summary.component';
import { ViewJobDetailsComponent } from './components/view-job-details/view-job-details.component';
import { JobDetailsViewComponent } from './ui/job-details-view/job-details-view.component';
import { ViewJobsAppliedComponent } from './components/view-jobs-applied/view-jobs-applied.component';
import { JobsAppliedViewComponent } from './ui/jobs-applied-view/jobs-applied-view.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    TickmarkComponent,
    JobapplicationformComponent,
    JobDetailsDescriptionComponent,
    JobDetailsHeaderComponent,
    JobDetailsSummaryComponent,
    ViewJobDetailsComponent,
    JobDetailsViewComponent,
    ViewJobsAppliedComponent,
    JobsAppliedViewComponent,
    NavigationComponent,
    LogoComponent
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
