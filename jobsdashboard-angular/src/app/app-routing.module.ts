import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewJobDetailsComponent } from './components/view-job-details/view-job-details.component';
import { ViewJobsAppliedComponent } from './components/view-jobs-applied/view-jobs-applied.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [ 
{ path: '', redirectTo: 'jobs', pathMatch: 'full' },
{ path: 'jobs-applied', component: ViewJobsAppliedComponent },
{ path: 'jobs-details/:id', component: ViewJobDetailsComponent },
{ path: 'login', component: LoginComponent},
{ path: 'accountDetails', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
