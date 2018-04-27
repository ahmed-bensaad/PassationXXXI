import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {PressionsPage} from '../pressions/pressions';
import {BouteillesPage} from '../bouteilles/bouteilles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  PressionsPage=PressionsPage;
  BouteillesPage=BouteillesPage;
}
