import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosPersonaPage } from './datos-persona';

@NgModule({
  declarations: [
    DatosPersonaPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosPersonaPage),
  ],
})
export class DatosPersonaPageModule {}
