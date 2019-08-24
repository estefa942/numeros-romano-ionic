import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public number;
  public salida;
  decimal= [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  romano= ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  toRomano() {
    let number = this.number;
    this.salida = '';
    let i;
    for (i = 12; i >= 0; i--) {
      while (number >= this.decimal[i]) {
        number = number - this.decimal[i];
        this.salida = this.salida + this.romano[i];
      }
    }
  }
}
