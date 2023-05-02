import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
    constructor(private http: HttpClient) { }

    submitForm(event: Event) {
      event.preventDefault();
      const body = {
        email: '',        
        password: ''
      };
   
      // call your backend API here
      this.http.post('http://localhost:3001/api/account/login', {
        // request body here, if any
      }).subscribe((response: any) => {
        // handle the response here, e.g. save the token in a service or local storage
        const token = response.data.token;
        console.log(token);
      });
    }
  }
