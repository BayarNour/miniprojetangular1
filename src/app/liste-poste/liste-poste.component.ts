import { Component, OnInit } from '@angular/core';
import { Poste } from '../model/poste.model';
import { EmployeService } from '../services/employe.service';
import { Employe } from '../model/employe.model';

@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.component.html',
  styleUrls: ['./liste-poste.component.css']
  
})
export class ListePosteComponent implements OnInit {
  poste : Poste[]=[];
  employe: Employe[] = [];
  updatedPoss: Poste = { "idPoste": 0, "nomPoste": '' };
  ajout:boolean=true;



constructor(private employeService : EmployeService) { }


ngOnInit(): void {
  //this.poste = this.employeService.listePoste();
  
this.employeService.listePoste().
subscribe(postes => {this.poste = postes;
console.log(postes);
});

 

}

posteUpdated(poss:Poste){
  console.log("Poss updated event",poss);
this.employeService.ajouterPoste(poss).
 subscribe( ()=> this.chargerPoste());
   }




   chargerPoste() {
    this.employeService.listeEmploye()
      .subscribe(emp => {
        this.employe = emp; // Assignez directement la liste des employés retournée par le service
        console.log(emp); // Affichez les données pour vérification
      });}

  
  UpdatedPoss(poss:Poste) {
    this.updatedPoss = poss;
    this.ajout=false;
    }
   
}
