import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeEnregistrementPage } from './liste-enregistrement';

@NgModule({
  declarations: [
    ListeEnregistrementPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeEnregistrementPage),
  ],
})
export class ListeEnregistrementPageModule {}
