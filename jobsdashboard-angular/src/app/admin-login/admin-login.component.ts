import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  public loginValid = true;
  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.authService.authenticateUser(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      (data)=>{
        if(data.message === "login successful")
        {
            console.log(data)
            this.loginValid=true
            this.router.navigateByUrl('admin-home')
        }
        else
        {
          console.log("Login failed in else")
          this.loginValid=false
        }
      },
      (error)=>{
        console.error(error);
      }
    )
  }


}
