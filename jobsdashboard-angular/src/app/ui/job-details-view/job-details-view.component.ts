import { Component, Input, OnInit } from '@angular/core';

type JobsDetailsType = {
  _id: string
  date: string;
  company:string;
  company_logo:string;
  position:string;
  logo:string;
  description:string;
  location:string;
  salary_min:number;
  salary_max:number;
};

@Component({
  selector: 'app-job-details-view',
  templateUrl: './job-details-view.component.html',
  styleUrls: ['./job-details-view.component.css']
})
export class JobDetailsViewComponent {
  @Input() jobDetails!: JobsDetailsType;
}
