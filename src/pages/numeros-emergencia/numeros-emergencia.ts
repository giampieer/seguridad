import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the NumerosEmergenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-numeros-emergencia',
  templateUrl: 'numeros-emergencia.html',
})
export class NumerosEmergenciaPage {

  myDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumerosEmergenciaPage');
  }
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Alerta',
      message: '¿Desea guardar esta información?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
