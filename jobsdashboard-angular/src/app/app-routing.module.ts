import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewJobDetailsComponent } from './components/view-job-details/view-job-details.component';
import { ViewJobsAppliedComponent } from './components/view-jobs-applied/view-jobs-applied.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { JobsListingComponent } from './components/jobs-listing/jobs-listing.component';

const routes: Routes = [ 
{ path: '', component: JobsListingComponent },
{ path: 'jobs-applied', component: ViewJobsAppliedComponent },
{ path: 'jobs-details/:id', component: ViewJobDetailsComponent },
{ path: 'login', component: LoginComponent},
{ path: 'accountDetails', component: AccountComponent },
{ path: 'admin-login', component: AdminLoginComponent },
{ path: 'login', component: LoginComponent},
{ path: 'admin-home', component: AdminHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
