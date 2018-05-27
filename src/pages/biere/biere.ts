import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


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
	beerList;
	Caption;
	storage;
  constructor(public navCtrl: NavController, public navParams: NavParams,storage:Storage) {
  	this.storage=storage;
		this.beer = navParams.get('item');
		this.beerList = navParams.get('beers');
		console.log(this.beerList);
		console.log(this.beer);
		this.Caption=this.beer.checked == true? "Uncheck" : "Check";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BierePage');
  }
  onClick(storage:Storage){
  	this.beer.checked= !this.beer.checked;
  	this.beerList[this.beer.checked]=!this.beer.checked;
  	storage.set('json', this.beerList);
  	this.Caption=this.beer.checked == true? "Uncheck" : "Check";
  }


}
