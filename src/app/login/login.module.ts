import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginCardComponent } from './components/login-card/login-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
    LoginCardComponent
  ]
})
export class LoginPageModule {}
