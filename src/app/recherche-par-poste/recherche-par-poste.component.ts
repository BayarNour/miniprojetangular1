import { Component,OnInit } from '@angular/core';
import{ Employe } from '../model/employe.model';
import { Poste } from '../model/poste.model';
import { EmployeService } from '../services/employe.service';


@Component({
  selector: 'app-recherche-par-poste',
  templateUrl: './recherche-par-poste.component.html',
  styles: ``
})

export class RechercheParPosteComponent implements OnInit {
  employe : Employe[]=[];
  poste : Poste[] =[];
  IdPoste:number =0;
  constructor(private employeService: EmployeService){
    
  }

  ngOnInit():void{
    this.employeService.listePoste().
subscribe(postes => {this.poste = postes;
console.log(postes);
});
  }
 
  onChange() {
     
    this.employeService.rechercherParPoste(this.IdPoste).
    subscribe(postes =>{this.employe=postes});
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
