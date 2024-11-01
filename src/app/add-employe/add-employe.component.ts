import { Component ,OnInit } from '@angular/core';
import { Employe } from '../model/employe.model';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';
import { Poste } from '../model/poste.model';
import { AbstractControl,FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html'
})





export class AddEmployeComponent implements OnInit {
  newEmploye = new Employe();
  poste! : Poste[];
  newIdPoste! : number;
  newPoste! : Poste;
  myForm!:FormGroup;

  constructor(private employeService: EmployeService ,
     private router :Router,
     private formBuilder:FormBuilder
     ) { }
  
  
  
  
  ngOnInit(): void {
    this.poste=this.employeService.listePoste();
    this.myForm=this.formBuilder.group({
      idEmploye:['',[Validators.required]],
      email:['',[Validators.required ,Validators.email]],
     nomEmploye:['',[Validators.required,Validators.minLength(5)]],
     salaireEmploye:['',[Validators.required]],
     dateEmploye:['',[Validators.required]],
     nomPoste:['',[Validators.required]]
    });
  }

  addEmploye(){
    this.newPoste =
    this.employeService.consulterPoste(this.newIdPoste);
    this.newEmploye.poste = this.newPoste;

    this.employeService.ajouterEmploye(this.newEmploye);
    this.router.navigate(["employe"]);

    }
    

}