import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Enregistrer } from '../../services/enregistrer';
import { ModifierFormulairePage } from '../modifier-formulaire/modifier-formulaire';

/**
 * Generated class for the ListeEnregistrementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-enregistrement',
  templateUrl: 'liste-enregistrement.html',
})
export class ListeEnregistrementPage {
  listeEnregistrement:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private serviceEnre:Enregistrer) {
     this.listeEnregistrement = this.serviceEnre.enfant;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeEnregistrementPage');
  }

  
}
