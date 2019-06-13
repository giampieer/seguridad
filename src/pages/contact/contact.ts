import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosPersonaPage } from '../datos-persona/datos-persona';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goDatosPersonas(){
    this.navCtrl.push(DatosPersonaPage);
  }
}
