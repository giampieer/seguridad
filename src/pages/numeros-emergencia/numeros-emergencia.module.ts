import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumerosEmergenciaPage } from './numeros-emergencia';

@NgModule({
  declarations: [
    NumerosEmergenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(NumerosEmergenciaPage),
  ],
})
export class NumerosEmergenciaPageModule {}
