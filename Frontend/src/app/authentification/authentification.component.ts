import { Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {
  isLoginvisible: boolean = true;
  showLogin(){
    this.isLoginvisible = true ;
  }
  showRegister(){
    this.isLoginvisible = false ;
  }
}
