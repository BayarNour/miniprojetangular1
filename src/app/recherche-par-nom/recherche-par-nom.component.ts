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
    nomEmploye: string = ''; 
    constructor(private employeService: EmployeService){
      
    }
    ngOnInit()
  {
  //this.employe = this.employeService.listEmploye();

  this.employeService.listeEmploye().subscribe(emp => {
    console.log(emp);
    this.employe = this.allEmploye = emp; // Assignez également à `employe`.
  });
    
    };
  


  
    rechercherEmp(){
      this.employeService.rechercherParNom(this.nomEmploye).
      subscribe(emp => {
      this.employe = emp; 
      console.log(emp)});
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

  /* onKeyUp(filterText : string){
    this.employe = this.allEmploye.filter(item =>
      item.nomEmploye && item.nomEmploye.toLowerCase().includes(filterText)
    );
    }  */
  
    
}
