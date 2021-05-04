import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showError = false;

  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('testuser', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]),
      'password': new FormControl('testpass', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(){
    this.authService.checkCredentials(this.loginForm.controls.username.value, 
                                      this.loginForm.controls.password.value);
    this.showError = this.authService.loginFailed;
  }
}
