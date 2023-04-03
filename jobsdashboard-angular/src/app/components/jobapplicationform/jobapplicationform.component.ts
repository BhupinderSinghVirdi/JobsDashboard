import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobapplicationform',
  templateUrl: './jobapplicationform.component.html',
  styleUrls: ['./jobapplicationform.component.css']
})
export class JobapplicationformComponent {
  @ViewChild('applicationForm') applicationForm: any;
  @ViewChild('fileInput') fileInput: any;
  user_id: string = "";
  job_id: string = "";
  showTickMark = false;
  mainFormData: FormData | undefined;
  applyWithName: any;
  applyWithEmail: any;
  applyWithPhone: any;
  faCloudUpload : IconProp = faCloudUpload as IconProp;

  handleSubmit(applicationForm: NgForm) {
    console.log(applicationForm)
    if (applicationForm.submitted) {
      const formData = new FormData(this.applicationForm.nativeElement);
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
    this.mainFormData = formData;
  }

  handleFileChange(files: FileList | null) {
    const formData = new FormData(this.applicationForm.nativeElement);
    this.mainFormData = formData;

    if (files && files.length > 0) {
      const file = files[0];
      formData.append('file', file);
      this.showTickMark = true;
    }
  }
}
