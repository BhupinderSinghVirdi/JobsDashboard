import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import JobsService from '../../services/jobs.service';
import { JobItem } from '../../models/jobitem.model';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.css']
})


export class JobsListingComponent implements OnInit {
  jobs_listing$!: Observable<JobItem[]>;

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobs_listing$ = this.jobsService.getJobs();
  }
}