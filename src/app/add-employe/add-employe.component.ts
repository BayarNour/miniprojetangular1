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
    /* this.employeService.listePoste().
subscribe(postes => {console.log(postes);
this.poste = postes._embedded.poste;
}
); */


this.employeService.listePoste().
subscribe(postes => {this.poste = postes;
console.log(postes);
});






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
    this.newEmploye.poste = this.poste.find(poss => poss.idPoste == this.newIdPoste)!;
    this.employeService.ajouterEmploye(this.newEmploye)
    .subscribe(emp => {
    console.log(emp);
    this.router.navigate(['employe']);
    });
    }
    

}