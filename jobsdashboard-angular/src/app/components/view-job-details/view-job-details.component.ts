import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-view-job-details',
  templateUrl: './view-job-details.component.html',
  styleUrls: ['./view-job-details.component.css']
})
export class ViewJobDetailsComponent {
  jobDetails: any;

  async ngOnInit() {
    try {
      const response = await axios.get('http://localhost:3001/api/jobsapplied');
      const data = response.data;
      this.jobDetails = data;
    } catch (error) {
      console.log(error);
    }
  }
}
