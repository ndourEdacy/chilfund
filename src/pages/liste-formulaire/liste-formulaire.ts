import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EregistrerFomulairePage } from '../eregistrer-fomulaire/eregistrer-fomulaire';

/**
 * Generated class for the ListeFormulairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-formulaire',
  templateUrl: 'liste-formulaire.html',
})
export class ListeFormulairePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeFormulairePage');
  }
  formEnfant(){
    this.navCtrl.push(EregistrerFomulairePage);
  }
}
