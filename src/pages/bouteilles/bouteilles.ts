import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RemoteServiceProvider} from '../../providers/remote-service/remote-service'
import {BierePage} from '../biere/biere'
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteServiceProvider) {
  this.getPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BouteillesPage');
  }
    getPosts(){
        this.remoteService.getPosts().subscribe((data)=>{
            this.beerList = data['beers'];
        });
    }

    itemClicked(item){
      this.navCtrl.push(BierePage, { item: item });
    }

}
