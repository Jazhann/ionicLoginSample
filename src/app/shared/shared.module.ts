import { IonicModule } from '@ionic/angular';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Globals } from './globals';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        Globals
      ],
    };
  }
}
