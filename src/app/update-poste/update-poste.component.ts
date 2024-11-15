import { Component,OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../model/employe.model';
import { Poste } from '../model/poste.model';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-update-poste',
  templateUrl: './update-poste.component.html',
  styles: ``
})

export class UpdatePosteComponent implements OnInit {
  @Input() ajout!: boolean;
  currentEmploye=new Employe();
  @Input() poste!:Poste[];

  updatedPossId!:number;
  myForm!:FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private employeService:EmployeService,
    private router :Router,
    private formBuilder:FormBuilder){

    }


    ngOnInit()
    {
     this.poste = this.employeService.listePoste(); 
     this.myForm=this.formBuilder.group({
       idEmploye:['',[Validators.required]],
       email:['',[Validators.required,Validators.email]],
      nomEmploye:['',[Validators.required,Validators.minLength(5)]],
      salairEmploye:['',[Validators.required]],
      dateEmploye:['',[Validators.required]],
      poste:['',[Validators.required]]
     });

     this.currentEmploye =
this.employeService.consulterEmploye(this.activatedRoute.snapshot.params['id']);
this.updatedPossId=this.currentEmploye.poste.idPoste;


}
updateEmploye() {
  this.currentEmploye.poste = this.employeService.consulterEmploye(this.updatedPossId).poste;
  this.employeService.updateEmploye(this.currentEmploye);
  this.router.navigate(['employe']);
  }




}
