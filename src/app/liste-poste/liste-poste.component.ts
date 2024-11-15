import { Component, OnInit } from '@angular/core';
import { Poste } from '../model/poste.model';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.component.html',
  styleUrls: ['./liste-poste.component.css']
  
})
export class ListePosteComponent implements OnInit {
  poste! : Poste[];
  updatedPoss: Poste = { idPoste: 0, nomPoste: '' };
  ajout:boolean=true;



constructor(private employeService : EmployeService) { }


ngOnInit(): void {
  this.poste = this.employeService.listePoste();
 

}

posteUpdated(poss:Poste){
  if (this.ajout) {
   this.employeService.ajouterPoste(poss);
 } else {
   // Si ajout est faux, modifier la marque existante
   const index = this.poste.findIndex(m => m.idPoste === poss.idPoste);
   this.poste[index] = poss;
    
   
 }
 this.chargerPoste();
 this.ajout = true; 
   }




   chargerPoste(){
    this.poste = this.employeService.listePoste();
  }
  
  UpdatedPoss(poss:Poste) {
    this.updatedPoss = poss;
    this.ajout=false;
    }
   
}
