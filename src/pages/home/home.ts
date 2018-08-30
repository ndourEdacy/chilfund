import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Enregistrer } from '../../services/enregistrer';
import { EregistrerFomulairePage } from '../eregistrer-fomulaire/eregistrer-fomulaire';
import { ListeFormulairePage } from '../liste-formulaire/liste-formulaire';
import { AfficherFormulairePage } from '../afficher-formulaire/afficher-formulaire';
import { ListeEnregistrementPage } from '../liste-enregistrement/liste-enregistrement';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  enregistrer(){
    this.navCtrl.push(ListeFormulairePage);
  }

  envoyer(){
    this.navCtrl.push(ListeEnregistrementPage);
  }

  lister(){
    this.navCtrl.push(AfficherFormulairePage);
  }

  deconnecter(){
      
  }
}
