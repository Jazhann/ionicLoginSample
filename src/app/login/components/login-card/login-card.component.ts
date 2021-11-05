import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ButtonStyles } from '@models/buttonStyles';
import { Credentials } from '@models/credentials';
import { Globals } from '@shared/globals';


@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent {
  @Output() credentials = new EventEmitter<Credentials>();

  buttonStyles: ButtonStyles;
  errors = {
    email: false,
    password: false
  };
  isMobile = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  remind = new FormControl(false);

  constructor(
    globals: Globals
  ) {
    this.isMobile = globals.platformMobile;
    this.buttonStyles = this.isMobile ? globals.buttonMobile : globals.buttonDesktop;
  }

  checkFormValues() {
      this.errors.email = this.email.invalid;
      this.errors.password = this.password.invalid;
      if (!this.errors.email && !this.errors.password) {
        this.credentials.emit({
          email: this.email.value,
          password: this.password.value,
          remind: this.remind.value
        });
      }
  }

}
