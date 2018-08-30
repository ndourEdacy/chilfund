import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Enregistrer } from '../../services/enregistrer';

/**
 * Generated class for the VueFormulairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vue-formulaire',
  templateUrl: 'vue-formulaire.html',
})
export class VueFormulairePage {
  enfant={
    nom:'',
    prenom:'',
    age:0,
    adress:'',
    lieunaiss:'',
    datenaiss:'',
    sexe:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.enfant = this.navParams.data.enfant;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VueFormulairePage');
  }

}
