import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   user={
     username:'user',
     mdp:'user'
   }
   username:string;
   mdp:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(){
    if(this.username == this.user.username && this.mdp == this.user.mdp){
      this.navCtrl.push(HomePage);
    }
    else{
        this.showAlert();
    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Erreur de connexion',
      subTitle: 'nom utilisateur ou mot de passe invalide',
      buttons: ['OK']
    });
    alert.present();
  }
}
