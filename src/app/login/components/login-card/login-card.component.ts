import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/shared/globals';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  isMobile = false;
  buttonStyles;

  constructor(
    globals: Globals
  ) {
    this.isMobile = globals.platformMobile;
    this.buttonStyles = this.isMobile ? globals.buttonMobile : globals.buttonDesktop;
  }

  ngOnInit() {}

}
