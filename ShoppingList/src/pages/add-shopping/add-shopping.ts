import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  //initialize a new shopping item
  //create a new object
  shoppingItem = {} as ShoppingItem;

  //reference to shopping item list inside a firebase
  shoppingItemRef: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase,
    public alertCtrl: AlertController ) {
    this.shoppingItemRef = this.database.list('shopping-list');
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    /**
     * create a new anaonymous object and convert itemNumber to a number
     * Push the object to Firebase database under the 'shopping-list' node
     */ 

    this.shoppingItemRef.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    

      let alert = this.alertCtrl.create({
        title: 'Item added!',
        subTitle: this.shoppingItem.itemName+ ' added to shopping list',
        buttons: ['OK']
      });
      alert.present();

       //Reset shoppingItem
      this.shoppingItem = {} as ShoppingItem;
    
      //Navigate back to Shopping List page
      this.navCtrl.pop();

    

  }

}
