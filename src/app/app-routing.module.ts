import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';



const routes: Routes = [
  {path: "employe", component : EmployeComponent},
  {path: "add-employe", component : AddEmployeComponent},
  {path: "updatEmploye/:id", component: UpdateEmployeComponent},
  { path: "", redirectTo: "employe", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
