import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
 })
export class Globals {
    platformMobile = false;
    buttonDesktop = {
        fill: 'outline',
        shape: 'round',
        expand: 'block',
        strong: 'true',
    };
    buttonMobile = {
        fill: 'solid',
        shape: 'undefined',
        expand: 'full',
        strong: 'false'
    };
};
