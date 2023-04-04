import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-details-summary',
  templateUrl: './job-details-summary.component.html',
  styleUrls: ['./job-details-summary.component.css']
})
export class JobDetailsSummaryComponent {
  @Input() date!: string;
  @Input() salary_min!: number;
  @Input() salary_max!: number;
  @Input() location!: string;

  get formattedDate(): string {
    const newDate = new Date(this.date);
    return newDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
}
