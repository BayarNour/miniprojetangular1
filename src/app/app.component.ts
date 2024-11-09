import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Employe';


  constructor(public authService: AuthService , private router:Router){

  }
  ngOnInit () {
   let isloggedin: string | null;
   let loggedUser: string | null;

   isloggedin = localStorage.getItem('isloggedIn') || 'false';  // Valeur par défaut si null
   loggedUser = localStorage.getItem('loggedUser') || ''; 
    if (isloggedin!="true" || !loggedUser)
        this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }


  onLogout(){
    this.authService.logout();
  }
}
