import { Component,OnInit } from '@angular/core';
import{ Employe } from '../model/employe.model';
import { Poste } from '../model/poste.model';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``,
})
export class RechercheParNomComponent implements OnInit {
    employe : Employe[]=[];
    poste : Poste[] =[];
    IdPoste:number =0;
    allEmploye:Employe[]=[];
    searchTerm!:string;
    constructor(private employeService: EmployeService){
      
    }
    ngOnInit()
  {
  
      this.employe = this.employeService.listEmploye();
    };
  
  supprimerEmploye(e: Employe)
  {
    let conf =confirm("Etes-vous sur ?");
    if(conf){
     this.employeService.supprimerEmploye(e);
     this.employe =  this.employeService.rechercherParPoste(this.IdPoste);
    }
   
  }
   onKeyUp(filterText : string){
    this.employe = this.allEmploye.filter(item =>
      item.nomEmploye && item.nomEmploye.toLowerCase().includes(filterText)
    );
    }
  
    
}
