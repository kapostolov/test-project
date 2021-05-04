import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-potato-sales';
  logged: string;

  
  constructor(private authService: AuthService) {
    this.authService.logged.subscribe(x => this.logged = x);
  }

  onLogOut(){
    this.authService.LogOut();
  }
}
