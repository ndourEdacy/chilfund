import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Enregistrer } from '../../services/enregistrer';
import { AfficherFormulairePage } from '../afficher-formulaire/afficher-formulaire';
import { Enfant } from '../../modele/enfant';
import { Storage } from '../../../node_modules/@ionic/storage';
import { Geolocation } from '../../../node_modules/@ionic-native/geolocation';
import { CameraOptions, Camera } from '../../../node_modules/@ionic-native/camera';

/**
 * Generated class for the EregistrerFomulairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eregistrer-fomulaire',
  templateUrl: 'eregistrer-fomulaire.html',
})
export class EregistrerFomulairePage {
  imgProfil:string='assets/imgs/avatar.png';
  enfant={
    idEnfant:0,
    nom:'',
    prenom:'',
    age:0,
    adres:'',
    lieunaiss:'',
    datenaiss:'',
    sexe:'',
    location:{
      longitude:0,
      latitude:0
     },
     prophil:''
  };
  tabefant=[];
   id:number=0;
   long:number=0;
   lati:number=0;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, 
    public navParams: NavParams,private serviceEnregistrer:Enregistrer ,
    public alertCtrl: AlertController,public storage:Storage,
    private geolocation: Geolocation ,private camera: Camera) {
      // storage.length().then(val=>{
      //       this.id=val;
      //    });
      
     console.log(this.id);
  }
 controller(){
   if(this.enfant.nom=='' || this.enfant.datenaiss=='' || this.enfant.lieunaiss=='' || this.enfant.prenom=='' || this.enfant.sexe=='')
    return false;
    return true;
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EregistrerFomulairePage');
   
  }
  // addEnfant(enfant:Enfant){
  //   enfant.idEnfant = ++this.id;
  //   this.tabefant.push(enfant);
  //   console.log("enfant");
  //   this.serviceEnregistrer.enregistrer(this.enfant);
  // }
  enregistrer(){
     if(this.controller() == false){
       this.showAlert("Veiller remplir les champs svp!!");
       return;
     }
    this.geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.enfant.location.latitude=pos.coords.latitude;
      this.enfant.location.longitude=pos.coords.longitude;
    });

    const watch = this.geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.enfant.location.latitude=pos.coords.latitude;
      this.enfant.location.longitude=pos.coords.longitude;
    });

    // // to stop watching
    watch.unsubscribe();
    
    //this.navCtrl.push(AfficherFormulairePage,{enfants: this.enfant});
    this.enfant.idEnfant = this.id++;
    this.tabefant.push(this.enfant);
    this.enfant.location.longitude=this.long;
    this.enfant.location.latitude=this.lati;
    this.enfant.prophil=this.imgProfil;
    this.serviceEnregistrer.enregistrer(this.enfant);
    this.enfant={
      idEnfant:0,
      nom:'',
      prenom:'',
      age:0,
      adres:'',
      lieunaiss:'',
      datenaiss:'',
      sexe:'',
      location:{
        longitude:0,
        latitude:0
       },
       prophil:''
    };
    this.showAlert("Element enregistrer!!");
    
   // console.log(this.enfant);
  }
  showAlert(p:string) {
    const alert = this.alertCtrl.create({
      title: 'alert',
      subTitle: p,
      buttons: ['OK']
    });
    alert.present();
  }
  envoyer(){
    this.presentLoading();
   this.serviceEnregistrer.removeAll();
   this.enfant={
      idEnfant:0,
      nom:'',
      prenom:'',
      age:0,
      adres:'',
      lieunaiss:'',
      datenaiss:'',
      sexe:'',
      location:{
      longitude:0,
      latitude:0
     },
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
}
