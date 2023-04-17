import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


interface Job {
  _id: string;
  position: string;
  company: string;
  date_applied: Date;
  status: string;
  archive: boolean;
}

interface JobsAppliedType {
  _id: string;
  user_id: string;
  jobs_applied: Job[];
}

@Component({
  selector: 'app-view-jobs-applied',
  templateUrl: './view-jobs-applied.component.html',
  styleUrls: ['./view-jobs-applied.component.css']
})
export class ViewJobsAppliedComponent implements OnInit  {
  jobs_applied: JobsAppliedType[] = [];
  displayArchived = false;
  faArchive=faArchive;

  constructor(private router: Router) { }

  async ngOnInit() {
    await this.sendGetRequest();
  }

  async sendGetRequest() {
    try {
      const response = await axios.get('https://jobs-dashboard-api.onrender.com/api/jobsapplied');
      this.jobs_applied = response.data;
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async handleArchive(user_id: string, job_id: string) {
    try {
      const response = await axios.patch(
        `https://jobs-dashboard-api.onrender.com/api/jobsapplied/${user_id}/${job_id}`,
        { archive: true }
      );
      console.log(response);
      await this.sendGetRequest();
    } catch (err) {
      console.log(err);
    }
  }

  goToJobs() {
    this.router.navigateByUrl('/jobs');
  }
}
