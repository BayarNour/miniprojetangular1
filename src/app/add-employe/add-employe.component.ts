import { Component ,OnInit } from '@angular/core';
import { Employe } from '../model/employe.model';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';
import { Poste } from '../model/poste.model';



@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html'
})





export class AddEmployeComponent implements OnInit {
  newEmploye = new Employe();
  poste! : Poste[];
  newIdPoste! : number;
  newPoste! : Poste;

  constructor(private employeService: EmployeService ,
     private router :Router) { }
  
  
  
  
  ngOnInit(): void {
    this.poste=this.employeService.listePoste();
  }

  addEmploye(){
    this.newPoste =
    this.employeService.consulterPoste(this.newIdPoste);
    this.newEmploye.poste = this.newPoste;

    this.employeService.ajouterEmploye(this.newEmploye);
    this.router.navigate(["employe"]);

    }
    

}
