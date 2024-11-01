import {Poste} from "./poste.model";

export class Employe {
    idEmploye! : number;
    nomEmploye! : string;
    salaireEmploye! : number;
     dateEmploye! : Date ;
     poste!:Poste;
     email!:string;
     enable!:boolean;
    }
