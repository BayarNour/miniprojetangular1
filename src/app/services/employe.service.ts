import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import {Poste}from '../model/poste.model';


@Injectable({
  providedIn: 'root'
})



export class EmployeService {
    employe:Employe[];
    poste :Poste[];
    employeRecherche: Employe[] = [];
    constructor() { 
      this.poste=[{idPoste : 1, nomPoste:"Secrétaire administratif"},
                  {idPoste:2,nomPoste:"Responsable RH"}
    ];





    this.employe = [{idEmploye : 1, nomEmploye : "amira ben salah" , salaireEmploye : 2000.000, dateEmploye : new Date("02/10/2021"), poste:{idPoste:1 , nomPoste:"Secrétaire administratif"}},
      {idEmploye :2, nomEmploye : "youssef zribi" , salaireEmploye : 2500.000, dateEmploye : new Date("12/20/2022"), poste:{idPoste:2 , nomPoste:"Responsable RH"}},
      {idEmploye :3, nomEmploye : "mohamed tounsi" , salaireEmploye : 1800.000, dateEmploye : new Date("09/19/2023"), poste:{idPoste:1 , nomPoste:"Secrétaire administratif"}}
 ];
  }

  listePoste():Poste[] {
    return this.poste;
    }
    consulterPoste(id:number):Poste{
      return this.poste.find(po => po.idPoste == id)!;
      }
    



  listEmploye():Employe[]{
    return this.employe;
  }
  ajouterEmploye(emp:Employe){
    this.employe.push(emp);
  }
  supprimerEmploye( emp: Employe){
    const index = this.employe.indexOf(emp, 0);
    if (index > -1) {
    this.employe.splice(index, 1);
    }
    
    }
    consulterEmploye(id:number):Employe{
      return this.employe.find(e => e.idEmploye == id)!; 
      }
    
      trierEmploye(){
        this.employe = this.employe.sort((n1,n2) => {
        if (n1.idEmploye! > n2.idEmploye!) {
        return 1;
        }
        if (n1.idEmploye! < n2.idEmploye!) {
        return -1;
        }
        return 0;
        });
        }

        
        updateEmploye(e:Employe)
        {
        // console.log(p);
        this.supprimerEmploye(e);
        this.ajouterEmploye(e);
        this.trierEmploye();
        }



        rechercherParPoste(idPoste: number): Employe[]{
          this.employeRecherche = [];

          this.employe.forEach((cur, index) => {
          if(idPoste == cur.poste.idPoste) {
            console.log("cur "+cur);
            this.employeRecherche.push(cur);
            }
          });
          return this.employeRecherche;
          }
        

  }



