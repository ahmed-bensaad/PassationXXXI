import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {PressionsPage} from '../pressions/pressions';
import {BouteillesPage} from '../bouteilles/bouteilles';
import { Diagnostic } from '@ionic-native/diagnostic';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private diagnostic: Diagnostic) {

  }
  PressionsPage=PressionsPage;
  BouteillesPage=BouteillesPage;


  getPermission() {
    this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.WRITE_EXTERNAL_STORAGE).then((status) => {
      if (status != this.diagnostic.permissionStatus.GRANTED) {
        this.diagnostic.requestRuntimePermission(this.diagnostic.permission.WRITE_EXTERNAL_STORAGE).then((data) => {
        })
      }
    }, (statusError) => {
    });
  

      this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.READ_EXTERNAL_STORAGE).then((status) => {
      if (status != this.diagnostic.permissionStatus.GRANTED) {
        this.diagnostic.requestRuntimePermission(this.diagnostic.permission.READ_EXTERNAL_STORAGE).then((data) => {
        })
      }    }, (statusError) => {
    });
  }

}




