import { Component, Input } from '@angular/core';
import { parse } from 'node-html-parser';

@Component({
  selector: 'app-job-details-description',
  templateUrl: './job-details-description.component.html',
  styleUrls: ['./job-details-description.component.css']
})
export class JobDetailsDescriptionComponent {
  @Input() job_description: string | undefined;

  get parsedDescription(): string {
    const rootNode = parse(this.job_description as string);
    return rootNode.toString();
  }
}
