import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VueFormulairePage } from './vue-formulaire';

@NgModule({
  declarations: [
    VueFormulairePage,
  ],
  imports: [
    IonicPageModule.forChild(VueFormulairePage),
  ],
})
export class VueFormulairePageModule {}
