import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { RechercheParPosteComponent } from './recherche-par-poste/recherche-par-poste.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component'; 
import { employeGuard } from './employe.guard';

const routes: Routes = [
  {path: "employe", component : EmployeComponent},
  {path: "add-employe", component : AddEmployeComponent,canActivate:[employeGuard]},
  {path: "updatEmploye/:id", component: UpdateEmployeComponent},
  {path: "rechercheParPoste", component : RechercheParPosteComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  { path: "", redirectTo: "employe", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
