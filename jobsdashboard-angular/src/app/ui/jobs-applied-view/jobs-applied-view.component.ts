import { Component, Input } from '@angular/core';
import { faArchive } from '@fortawesome/free-solid-svg-icons';

type JobAppliedType = {
  _id: string;
  position: string;
  company: string;
  date_applied: Date;
  status: string;
  archive: boolean;
};

@Component({
  selector: 'app-jobs-applied-view',
  templateUrl: './jobs-applied-view.component.html',
  styleUrls: ['./jobs-applied-view.component.css']
})
export class JobsAppliedViewComponent {
  @Input() user_id!: string;
  @Input() jobsApplied!: JobAppliedType[];
  @Input() displayArchived!: boolean;
  faArchive = faArchive;

  handleArchive(user_id: string, job_id: string) {
    // handleArchive function logic here
  }
}
