import { Component, Input } from '@angular/core';
import { JobItem } from '../../models/jobitem.model';

@Component({
  selector: 'app-job-list-view',
  templateUrl: './job-list-view.component.html',
  styleUrls: ['./job-list-view.component.css']
})

export class JobListViewComponent {
  @Input() job!: JobItem;

  formattedDate!: string;

  ngOnInit() {
    const newDate = new Date(this.job?.date);
    this.formattedDate = newDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  
}