import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosPersonaPage } from '../datos-persona/datos-persona';
import { NumerosEmergenciaPage } from '../numeros-emergencia/numeros-emergencia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goDatosPersonas(){
    this.navCtrl.push(DatosPersonaPage);
  }
  goNumerosEmergencia(){
    this.navCtrl.push(NumerosEmergenciaPage);
  }

}
