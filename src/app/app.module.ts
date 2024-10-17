import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { RechercheParPosteComponent } from './recherche-par-poste/recherche-par-poste.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    RechercheParPosteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
