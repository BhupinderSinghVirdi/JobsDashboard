import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-view-job-details',
  templateUrl: './view-job-details.component.html',
  styleUrls: ['./view-job-details.component.css']
})
export class ViewJobDetailsComponent {
  jobDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  async ngOnInit() {
    const jobId = this.route.snapshot.params['id'];
    try {
      const response = await axios.get(`http://localhost:3001/api/jobs/${jobId}`);
      const data = response.data;
      this.jobDetails = data;
    } catch (error) {
      console.log(error);
    }
  }
}
