import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poste } from '../model/poste.model';


@Component({
  selector: 'app-update-poste',
  templateUrl: './update-poste.component.html',
  styles: ``
})
export class UpdatePosteComponent implements OnInit{
  @Input()
  poste! : Poste;
  @Output()
  posteUpdated = new EventEmitter<Poste>();
  @Input()
  ajout!:boolean;


  ngOnInit(): void {
    console.log("ngOnInit du composant UpdatePoste ",this.poste);
    }
  savePoste(){
      this.posteUpdated.emit(this.poste);
      } 
  
      
}