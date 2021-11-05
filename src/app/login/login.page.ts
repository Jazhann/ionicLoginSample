import { Component } from '@angular/core';
import { Credentials } from '@models/credential';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor() {}

  /**
   * Check credentials
   *
   * @param credentials objet type Credentials
   */
  checkCredentials(credentials: Credentials) {
    if (credentials) {
      console.log('OK');
      return 'OK';
    }
  }

}
