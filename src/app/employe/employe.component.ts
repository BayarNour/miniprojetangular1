import { Component ,OnInit } from '@angular/core';
import { Employe } from '../model/employe.model';
import { AuthService } from '../services/auth.service';
import { EmployeService } from '../services/employe.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',

})
export class EmployeComponent implements OnInit {
  employe? : Employe[];

  constructor(private employeService: EmployeService,public authService: AuthService) {

    }
    ngOnInit():void {
      this.employe = this.employeService.listEmploye();
    }
  supprimerEmploye(e: Employe)
    {
      let conf =confirm("Etes-vous sur ?");
      if(conf)
      this.employeService.supprimerEmploye(e);
    }

    

}
