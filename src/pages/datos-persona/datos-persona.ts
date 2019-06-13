import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NumerosEmergenciaPage } from '../numeros-emergencia/numeros-emergencia';

/**
 * Generated class for the DatosPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-datos-persona',
  templateUrl: 'datos-persona.html',
})
export class DatosPersonaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPersonaPage');
  }

  goNumerosEmergencia(){
    this.navCtrl.push(NumerosEmergenciaPage);
  }
}
