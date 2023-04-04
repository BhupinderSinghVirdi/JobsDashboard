import { Component, Input } from '@angular/core';
import { faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-job-details-header',
  templateUrl: './job-details-header.component.html',
  styleUrls: ['./job-details-header.component.css']
})
export class JobDetailsHeaderComponent {
  @Input() position!: string;
  @Input() location!: string;
  @Input() company_logo!: string;

  mapMarkerIcon = faMapMarker;
  clockIcon = faClock;
  heartIcon = faHeart;

}
