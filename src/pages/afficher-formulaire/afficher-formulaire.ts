import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Enregistrer } from '../../services/enregistrer';
import { ModifierFormulairePage } from '../modifier-formulaire/modifier-formulaire';
import { VueFormulairePage } from '../vue-formulaire/vue-formulaire';
import { Storage } from '../../../node_modules/@ionic/storage';
import { ArrayType } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { Enfant } from '../../modele/enfant';

/**
 * Generated class for the AfficherFormulairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-afficher-formulaire',
  templateUrl: 'afficher-formulaire.html',
})
export class AfficherFormulairePage {
  listeenfant:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private serviceliste:Enregistrer,
              public storage:Storage) {
   // this.listeenfant = this.navParams.data.enfants;
   //this.listeenfant = this.serviceliste.enfant;
    storage.get('enfant').then(val=>{
      this.listeenfant = val!=null ?val:[];
      return this.listeenfant;
   })
    console.log(this.serviceliste.enfant)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfficherFormulairePage');
  }
  editer(e){
  
    this.navCtrl.push(ModifierFormulairePage,{enfant:e});
  }
  vue(e){
    this.navCtrl.push(VueFormulairePage,{enfant:e});
  }

  supprimer(e){
    this.serviceliste.enfant;
  }

}
