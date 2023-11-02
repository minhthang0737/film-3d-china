import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public showLoading = false;
  constructor(
    private router: Router
  ){
    //this.router.navigateByUrl("/")
  }

  
}
