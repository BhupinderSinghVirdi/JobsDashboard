import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickmarkComponent } from './components/tickmark/tickmark.component';
import { JobapplicationformComponent } from './components/jobapplicationform/jobapplicationform.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobDetailsDescriptionComponent } from './components/job-details-description/job-details-description.component';

@NgModule({
  declarations: [
    AppComponent,
    TickmarkComponent,
    JobapplicationformComponent,
    JobDetailsDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
