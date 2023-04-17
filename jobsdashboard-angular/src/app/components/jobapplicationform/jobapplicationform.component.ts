import { Component, Input, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-jobapplicationform',
  templateUrl: './jobapplicationform.component.html',
  styleUrls: ['./jobapplicationform.component.css']
})
export class JobapplicationformComponent {

  @ViewChild('applicationForm') applicationForm: any;
  @ViewChild('fileInput') fileInput: any;
  @Input() user_id: string = "";
  @Input() job_id: string = "";
  showTickMark = false;
  mainFormData: FormData | undefined;
  applyWithUserId: any;
  applyWithJobId: any;
  applyWithName: any;
  applyWithEmail: any;
  applyWithPhone: any;
  faCloudUpload : IconProp = faCloudUpload as IconProp;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.applyWithJobId = this.job_id; // set the job ID programmatically
    this.applyWithUserId = this.user_id;
  }

  async handleSubmit(applicationForm: NgForm) {
    console.log(applicationForm)
    if (applicationForm.submitted) {
      const formData = this.mainFormData;
      formData?.append('apply_with_name',applicationForm.value.name);
      formData?.append('apply_with_email', applicationForm.value.email);
      formData?.append('apply_with_phone', applicationForm.value.phone);
      try {
        const response = await axios.post('http://localhost:3001/api/jobsapplied', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      console.log('Submitting form data', formData);
    } else {
      alert('No form data');
    }
  }

  handleFileSelect() {
    this.fileInput.nativeElement.click();
  }

  handleInputChange() {
    const formData = new FormData(this.applicationForm.nativeElement);
    formData.append('job_id', this.applyWithJobId);
    formData.append('user_id', this.applyWithUserId);
    this.mainFormData = formData;
  }

  handleFileChange(files: FileList | null) {
    const formData = new FormData(this.applicationForm.nativeElement);
    formData.append('job_id', this.applyWithJobId);
    formData.append('user_id', this.applyWithUserId);
    if (files && files.length > 0) {
      const file = files[0];
      formData.append('file', file);
      this.mainFormData = formData;
      this.showTickMark = true;
    }
  }
}
