import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isAuthenticated : boolean = false ;

    Login(){
      this.isAuthenticated = true ;
    }

    Logout(){
      this.isAuthenticated = false 
    }
}
