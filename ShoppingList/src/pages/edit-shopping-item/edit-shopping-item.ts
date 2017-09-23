import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

import {Subscription} from 'rxjs/Subscription';
import { AlertController } from 'ionic-angular';




/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemSubscription: Subscription;

  shoppingItemRef: FirebaseObjectObservable<ShoppingItem>;

  shoppingItem = {} as ShoppingItem;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private database:AngularFireDatabase,
              public alertCtrl: AlertController) {

    //Capture the shoppingItemId as a NavParameter
    const shoppingItemId = this.navParams.get('shoppingItemId');
    
    //set the scope of firebase object equal to the selected item
    this.shoppingItemRef = this.database.object(`shopping-list/${shoppingItemId}`);

    
   
    this.shoppingItemSubscription =
    /**
     * un-wrap the observable -> subscribe to the object and assign the result to this.shoppingItem
     */
    this.shoppingItemRef.subscribe(
      shoppingItem => this.shoppingItem = shoppingItem
    );
  }

  
  editShoppingItem(shoppingItem: ShoppingItem){
    //Update the Firebase node with new item data 
    this.shoppingItemRef.update(shoppingItem);

    let alert = this.alertCtrl.create({
      title: 'Item edited!',
      subTitle:'Item in the shopping list is been edited',
      buttons: ['OK']
    });
    alert.present();

    //Send the user back to the ShoppingListPage
    this.navCtrl.pop();

  }

  
  ionViewWillLeave() {
     //unsubscribe from the object observable when leaving the page
    this.shoppingItemSubscription.unsubscribe();
  }
    

}
