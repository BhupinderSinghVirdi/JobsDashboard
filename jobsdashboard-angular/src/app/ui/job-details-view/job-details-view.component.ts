import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
export class JobDetailsViewComponent  implements OnInit {
  @Input() jobDetails!: JobsDetailsType;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  async ngOnInit() {
    const jobId = this.route.snapshot.params['id'];
    try {
      const response = await this.http.get(`/api/jobs/${jobId}`).toPromise();
      this.jobDetails = response as any;
    } catch (error) {
      console.log(error);
    }
  }

}
