import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import { Observable, of } from 'rxjs';
import {Poste}from '../model/poste.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PosteWrapper } from '../model/posteWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};



@Injectable({
  providedIn: 'root'
})



export class EmployeService {
  apiURL: string = 'http://localhost:8090/employe/api';

  apiURLPoss: string = 'http://localhost:8090/employe/poss';


  
  employe: Employe[] = [];
  employeRecherche: Employe[] = [];
    
    //poste :Poste[];


    
    constructor(private http : HttpClient) { 



      /*this.poste=[{idPoste : 1, nomPoste:"Secrétaire administratif"},
                  {idPoste:2,nomPoste:"Responsable RH"}
    ];*/





   /* this.employe = [{idEmploye : 1, nomEmploye : "amira ben salah" , salaireEmploye : 2000.000, dateEmploye : new Date("02/10/2021"), poste:{idPoste:1 , nomPoste:"Secrétaire administratif"},email:"amirabensalah4@gmail.com",enable:false},
      {idEmploye :2, nomEmploye : "youssef zribi" , salaireEmploye : 2500.000, dateEmploye : new Date("12/20/2022"), poste:{idPoste:2 , nomPoste:"Responsable RH"},email:"youssefzribi79@gmail.com",enable:false},
      {idEmploye :3, nomEmploye : "mohamed tounsi" , salaireEmploye : 1800.000, dateEmploye : new Date("09/19/2023"), poste:{idPoste:1 , nomPoste:"Secrétaire administratif"},email:"mohamedtounsi653@gmail.com",enable:false}
 ];*/
  }

  /* 
    listePoste():Observable<PosteWrapper>{
      return this.http.get<PosteWrapper>(this.apiURLPoss);
      } */
   
      

ajouterPoste( poss: Poste):Observable<Poste>{
  return this.http.post<Poste>(this.apiURLPoss, poss, httpOptions);

          } 




      listePoste():Observable<Poste[]>{
        return this.http.get<Poste[]>(this.apiURL+"/poss");
        }
        




  listeEmploye(): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.apiURL);
    }



    ajouterEmploye( emp: Employe):Observable<Employe>{
      return this.http.post<Employe>(this.apiURL, emp, httpOptions);
      }






      supprimerEmploye(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }


        
        consulterEmploye(id: number): Observable<Employe> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Employe>(url);
          }
          


          updateEmploye(emp :Employe) : Observable<Employe>
              {
              return this.http.put<Employe>(this.apiURL, emp, httpOptions);
              }
    




      trierEmploye(){
        this.employe = this.employe.sort((n1,n2) => {
        if (n1.idEmploye! > n2.idEmploye!) {
        return 1;
        }
        if (n1.idEmploye! < n2.idEmploye!) {
        return -1;
        }
        return 0;
        });
        }

        
        

        rechercherParPoste(idPoste: number):Observable< Employe[]> {
          const url = `${this.apiURL}/empPoste/${idPoste}`;
          return this.http.get<Employe[]>(url);
          }


          rechercherParNom(nom: string):Observable< Employe[]> {
            const url = `${this.apiURL}/empByName/${nom}`;
            return this.http.get<Employe[]>(url);
            }
            












    /*     rechercherParPoste(idPoste: number): Employe[]{
          this.employeRecherche = [];

          this.employe.forEach((cur, index) => {
          if(idPoste == cur.poste.idPoste) {
            console.log("cur "+cur);
            this.employeRecherche.push(cur);
            }
          });
          return this.employeRecherche;
          } */


         





        

  }