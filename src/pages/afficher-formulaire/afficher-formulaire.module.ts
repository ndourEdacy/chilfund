import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AfficherFormulairePage } from './afficher-formulaire';

@NgModule({
  declarations: [
    AfficherFormulairePage,
  ],
  imports: [
    IonicPageModule.forChild(AfficherFormulairePage),
  ],
})
export class AfficherFormulairePageModule {}
