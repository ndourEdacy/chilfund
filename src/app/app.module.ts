import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GalleryPage} from "../pages/gallery/gallery";
import {MeteoPage} from "../pages/meteo/meteo";
import {PlacesPage} from "../pages/places/places";
import {HttpModule} from "@angular/http";
import {GalleryService} from "../services/gallery.service";
import {DetailPage} from "../pages/detail/detail";
import { EregistrerFomulairePage } from '../pages/eregistrer-fomulaire/eregistrer-fomulaire';
import { Enregistrer } from '../services/enregistrer';
import { AfficherFormulairePage } from '../pages/afficher-formulaire/afficher-formulaire';
import { ListeEnregistrementPage } from '../pages/liste-enregistrement/liste-enregistrement';
import { ListeFormulairePage } from '../pages/liste-formulaire/liste-formulaire';
import { ModifierFormulairePage } from '../pages/modifier-formulaire/modifier-formulaire';
import { VueFormulairePage } from '../pages/vue-formulaire/vue-formulaire';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '../../node_modules/@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailPage,
    EregistrerFomulairePage ,
    AfficherFormulairePage,
    HomePage,
    ListeFormulairePage,
    ListeEnregistrementPage,
    ModifierFormulairePage,
    VueFormulairePage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__childfundStore',
      driverOrder: ['sqlite','indexeddb','websql']
    }),
   
 
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailPage,
    EregistrerFomulairePage ,
    AfficherFormulairePage,
    HomePage,
    ListeFormulairePage,
    ListeEnregistrementPage,
    ModifierFormulairePage,
    VueFormulairePage,
    LoginPage
  ],
  providers: [
    StatusBar, GalleryService,Enregistrer, 
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, Geolocation,Camera

  ]
})
export class AppModule {}
