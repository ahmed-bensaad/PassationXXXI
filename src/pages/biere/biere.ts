import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BierePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biere',
  templateUrl: 'biere.html',
})
export class BierePage {
	beer;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.beer = navParams.get('item');
		console.log(this.beer);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BierePage');
  }

}
