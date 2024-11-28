import { Component ,OnInit } from '@angular/core';
import { Employe } from '../model/employe.model';
import { AuthService } from '../services/auth.service';
import { EmployeService } from '../services/employe.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',

})
export class EmployeComponent implements OnInit {
  employe? : Employe[];

  constructor(private employeService: EmployeService,public authService: AuthService) {

    }
    ngOnInit():void {

      
      this.chargerEmploye();
      
    }




    chargerEmploye(){
      this.employeService.listeEmploye().subscribe(emp => {
      console.log(emp);
      this.employe = emp;
      }); 
      }
      


    
    supprimerEmploye(e: Employe)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.employeService.supprimerEmploye(e.idEmploye).subscribe(() => {
    console.log("employe supprimé");
    this.chargerEmploye();

    });
    } 
    
    

}
