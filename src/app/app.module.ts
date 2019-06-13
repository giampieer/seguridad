import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatosPersonaPage } from '../pages/datos-persona/datos-persona';
import { NumerosEmergenciaPage } from '../pages/numeros-emergencia/numeros-emergencia';
import { LoginPage } from '../pages/login/login'
import { GoogleMaps } from '@ionic-native/google-maps';
import { BackgroundMode } from '@ionic-native/background-mode';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DatosPersonaPage,
    NumerosEmergenciaPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DatosPersonaPage,
    NumerosEmergenciaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundMode
  ]
})
export class AppModule {}
