import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Globals } from './shared/globals';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private globals: Globals
  ) {
    this.globals.platformMobile = this.platform.is('ios') || this.platform.is('android');
  }

}
