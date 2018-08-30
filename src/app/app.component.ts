import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {GalleryPage} from "../pages/gallery/gallery";
import {MeteoPage} from "../pages/meteo/meteo";
import {PlacesPage} from "../pages/places/places";
import { EregistrerFomulairePage } from '../pages/eregistrer-fomulaire/eregistrer-fomulaire';
import { AfficherFormulairePage } from '../pages/afficher-formulaire/afficher-formulaire';
import { ListeFormulairePage } from '../pages/liste-formulaire/liste-formulaire';
import { LoginPage } from '../pages/login/login';
import { ListeEnregistrementPage } from '../pages/liste-enregistrement/liste-enregistrement';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  menus = [
    {title: 'Accueil', compenent: HomePage},
    {title: 'Choisir un formulaire', compenent: ListeFormulairePage },
    {title: 'Liste des enregistrements', compenent: AfficherFormulairePage},
    {title: 'Deconnecter', compenent: LoginPage},
  ];


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onPage(m) {
    this.rootPage= m.compenent;
  }
}

