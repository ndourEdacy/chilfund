import { Injectable } from "@angular/core";
import { Storage } from "../../node_modules/@ionic/storage";

import { Enfant } from "../modele/enfant";

@Injectable()
export class Enregistrer{
    enfant=[];
    el:any;
    i:number=0;
    constructor(private storage:Storage){
     this.getAllEnfant().then(val=>{
      this.enfant=val;
     });

     
    }
  enregistrer(e:Enfant){
  
      this.enfant.push(e);
     this.storage.set('enfant',this.enfant);
  }
   
 getAllEnfant(){
   return this.storage.get('enfant').then((val)=>{
     this.enfant = val!=null ?val:[];
     return this.enfant;
   });
 }

 modifier(e:Enfant){
    for(let i=0 ; i < this.enfant.length; i++){
      if(e.idEnfant == this.enfant[i].idEnfant)
        {
          this.enfant[i]=e;
          break;
        }
    }
    this.storage.set('enfant',this.enfant);
 }
 
 removeAll(){
   this.storage.remove('enfant');
   this.enfant= [];
 }
}