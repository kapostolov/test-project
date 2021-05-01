import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showError = false;
  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.authService.checkCredentials(form.value.username, form.value.password);
    this.showError = this.authService.loginFailed;
  }
}
