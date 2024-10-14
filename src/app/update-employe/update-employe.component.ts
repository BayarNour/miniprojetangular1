import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { EmployeService } from '../services/employe.service';
import { Employe } from '../model/employe.model';
import { Poste } from '../model/poste.model';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styles: ``
})

export class UpdateEmployeComponent implements OnInit {

  currentEmploye= new Employe();
  poste! : Poste[];
  updatedPostetId : number=0; 

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private employeService: EmployeService) { }

  ngOnInit():void{
    this.poste = this.employeService.listePoste();

    this.currentEmploye = this.employeService.consulterEmploye(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentEmploye);
    this.updatedPostetId=this.currentEmploye.poste.idPoste;

  } 
  updateEmploye()
  {
    this.currentEmploye.poste=this.employeService.consulterPoste(this.updatedPostetId);

      this.employeService.updateEmploye(this.currentEmploye);
      this.router.navigate(['employe']);


  }

}
  


