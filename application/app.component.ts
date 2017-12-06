/* =========================================================================================
 * Import Library Angular 2 
 * ========================================================================================= */

import { Component, OnInit } from '@angular/core';

/* =========================================================================================
 * Import Service
 * ========================================================================================= */

import { AppService } from './services/app.service';

/* =========================================================================================
 * Component
 * ========================================================================================= */

@Component ({
    selector    : 'my-app',
    templateUrl : './../public/views/layouts/main.html'
})

/* =========================================================================================
 * Class
 * ========================================================================================= */

export class AppComponent implements OnInit {

    /* =========================================================================================
     * Constructor
     * ========================================================================================= */

    constructor (private app: AppService) {}

    public ngOnInit () { }

}