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
    this.poste=this.employeService.listePoste();
    
  }
 
  onChange() {
     
     console.log(this.employe);
     this.employe =  this.employeService.rechercherParPoste(this.IdPoste);
     }
     supprimerEmploye(e: Employe)
     {
       let conf =confirm("Etes-vous sur ?");
       if(conf){
        this.employeService.supprimerEmploye(e);
        this.employe =  this.employeService.rechercherParPoste(this.IdPoste);
       }
      
     }

}
