import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BackgroundMode } from '@ionic-native/background-mode';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(private backgroundMode: BackgroundMode,public platform: Platform,public statusBar: StatusBar, splashScreen: SplashScreen) {
    backgroundMode.enable();
    platform.ready().then(() => {
      if(this.platform.is('android')) {
        //cambiar el color de statusbar al color primario de la app
        statusBar.backgroundColorByHexString('#0336FF');
      }
      splashScreen.hide();
    });
  }
}
