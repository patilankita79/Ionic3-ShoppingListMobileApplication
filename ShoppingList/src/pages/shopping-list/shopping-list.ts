import { ActionSheet } from 'ionic-angular/es2015';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { IonicModule, IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import {EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';




/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private database:AngularFireDatabase,
              private actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {

    /**
     * shoppingListRef can be pointed to firebase databse, to 'shopping-list' node
     * We can push thingsfrom this reference to database and we have access to everything inside the node
     */
    this.shoppingListRef = this.database.list('shopping-list');
  }

  //give an option to select the item, remove the item or cancel the item
  selectShoppingItem(shoppingItem: ShoppingItem) {
    /**
     * Display the actionsheet
     * options: 
     * 1. Edit the shoppingItem
     * 2. Delete the shoppingItem
     * 3. Cancel selection
     */
    
     this.actionSheetCtrl.create({
       //title should be the title of the item user has selected
       title: `${shoppingItem.itemName}`,
       buttons: [
         {
           text: 'Edit',
           icon: 'md-create',
           handler: () => {
             //Send the user to the EditShoppingItempage and pass the key - shoppingItem as a parameter
             this.navCtrl.push(EditShoppingItemPage, 
                               { shoppingItemId: shoppingItem.$key});

             /**
              * Navigation Stack
                ['ShoppingListPage', 'EditShoppingPage', {shoppingItemId: Selected item id}]
              */
           }
         },
         {
           text: 'Delete',
           icon: 'md-trash',
           role: 'destructive',
           handler: () => {
              //Delete the current ShoppingItem that is passed via the parameter
              this.shoppingListRef.remove(shoppingItem.$key);

              let alert = this.alertCtrl.create({
                title: 'Item deleted!',
                subTitle:'Item from the shopping list is removed.',
                buttons: ['OK']
              });
              alert.present();
           }
         },
         {
           text: 'Cancel',
           icon:'md-close',
           role: 'cancel',
           handler: () => {
             console.log("User has selected cancel button");
           }
         }
       ]
     }).present();
  }

  navigateToAddShoppingPage() {
    //navigate the user to AddShoppingPage
    this.navCtrl.push(AddShoppingPage);
  }

  

}
