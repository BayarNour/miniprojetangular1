import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { EmployeService } from '../services/employe.service';
import { Employe } from '../model/employe.model';
import { Poste } from '../model/poste.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styles: ``
})

export class UpdateEmployeComponent implements OnInit {

  currentEmploye= new Employe();
  poste! : Poste[];
  updatedPostetId : number=0; 
  myForm!:FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private employeService: EmployeService,
              private formBuilder:FormBuilder) { }



  ngOnInit():void{
    

/* 
    this.employeService.listePoste().
subscribe(postes => {this.poste = postes._embedded.poste;
console.log(postes);
}); */



this.employeService.listePoste().
subscribe(postes => {this.poste = postes;
console.log(postes);
});


    this.myForm = this.formBuilder.group({
      idEmploye: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nomEmploye: ['', [Validators.required, Validators.minLength(5)]],
      salaireEmploye: ['', [Validators.required]],
      dateEmploye: ['', [Validators.required]],
      nomPoste: ['', [Validators.required]]  });
    


      this.employeService.consulterEmploye(this.activatedRoute.snapshot.params['id']).
 subscribe( emp =>{ this.currentEmploye = emp; 
  this.updatedPostetId=this.currentEmploye.poste.idPoste;




 } ) ;

  } 




  updateEmploye() {
    this.currentEmploye.poste = this.poste.
 find(poss => poss.idPoste == this.updatedPostetId)!;
    this.employeService.updateEmploye(this.currentEmploye).subscribe(emp => {
    this.router.navigate(['employe']); }
    );
    }
    

}
  


