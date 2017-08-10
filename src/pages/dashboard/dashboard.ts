import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
  constructor() {
    console.log("Inside dashboard ======>");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

}
