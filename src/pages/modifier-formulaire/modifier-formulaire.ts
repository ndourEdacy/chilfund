import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Enregistrer } from '../../services/enregistrer';
import { Enfant } from '../../modele/enfant';
import { CameraOptions, Camera } from '../../../node_modules/@ionic-native/camera';

/**
 * Generated class for the ModifierFormulairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-formulaire',
  templateUrl: 'modifier-formulaire.html',
})
export class ModifierFormulairePage {
  imgProfil:string='assets/imgs/avatar.png';
  enfant={
    id:0,
    nom:'',
    prenom:'',
    age:0,
    adress:'',
    lieunaiss:'',
    datenaiss:'',
    sexe:'',
    prophil:''
  };
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,
     public navParams: NavParams,public service:Enregistrer,public camera:Camera) {
    this.enfant= this.navParams.data.enfant;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierFormulairePage');
  }
  modifier(e:Enfant){
    e.prophil=this.imgProfil;
    this.service.modifier(e);
    this.navCtrl.pop();
  }
  photo(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
    this.imgProfil= 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
    console.log(this.imgProfil)
  }
  envoyer(){
    this.presentLoading();

    this.enfant ={
      id:0,
      nom:'',
      prenom:'',
      age:0,
      adress:'',
      lieunaiss:'',
      datenaiss:'',
      sexe:'',
      prophil:''
    };
    
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
