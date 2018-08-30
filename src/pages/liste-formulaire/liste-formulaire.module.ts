import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeFormulairePage } from './liste-formulaire';

@NgModule({
  declarations: [
    ListeFormulairePage,
  ],
  imports: [
    IonicPageModule.forChild(ListeFormulairePage),
  ],
})
export class ListeFormulairePageModule {}
