import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RemoteServiceProvider} from '../../providers/remote-service/remote-service'
import {BierePage} from '../biere/biere'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the BouteillesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bouteilles',
  templateUrl: 'bouteilles.html',
})
export class BouteillesPage {
    beerList :any= [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteServiceProvider, private storage:Storage) {
  storage.get('json').then((val) => {
    if (val==null){
        console.log('val is null');
        this.getPosts(storage);

    }else{
      console.log('val is not null');
      this.beerList=val;

    }
  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BouteillesPage');
  }
    getPosts(storage:Storage){
        this.remoteService.getPosts().subscribe((data)=>{
            this.beerList = data['beers'];
            storage.set('json', this.beerList);


        });
    }

    itemClicked(item,beers){
      this.navCtrl.push(BierePage, { item: item, beers: this.beerList });
    }

}
