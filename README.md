# Shopping List MobileApplication - Hybrid Mobile Application
Ionic 3 shopping list application with full CRUD functionality using firebase2. <br>

<h3>Features</h3>
<li>You can add an item to the shopping list </li>
<li>You can edit an item from shopping list</li>
<li>You can delete an item from shopping list</li>
<li>Material design is used</li>

<hr>
<h2>Screenshots</h2>
<h4>Firebase Database Rules: <br>Change the defaault firebase database rules in order to allow anybody to read and write from the database</h4>
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/12_FirebaseDBRules.png" />
<h4>Firebase Database table</h4>
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/5_FirebaseDatabase.png" />
<h4>Shopping List</h4>
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/1_ShoppingList.png" />
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/2_AddItem.png" />
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/3_AddItem.png" />
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/4_ItemAdded.png" />
<h4>Firebase Database Entries</h4>
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/6_ItemAddedFirebase.png" />
<h4>If you want to edit or delete an item, tap on that item. Action sheet will appear</h4>
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/7_ActionList.png" />
<h4>Edit an item</h4>
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/8_EditItem.png" />
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/9_ItemEdited.png" />
<h4>Database entries</h4>
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/10_DbAfterEdit.png" />
<h4>If you select Delete option from action sheet, database is also updated</h4>
<img src="https://github.com/patilankita79/ShoppingListMobileApplication/blob/master/Screenshots/11_ItemDeleted.png" />

<hr>
<h3>Installation: </h3>
<blockquote>$npm install</blockquote>

<h3>Serve the application to browser: </h3>
<blockquote>$ionic serve</blockquote>


<h3>To view application in mobile simulated platforms</h3>
<blockquote>$ionic serve --l</blockquote>
OR
<blockquote>$ionic lab</blockquote>

<h3>Adding platforms </h3>

<i>To add android platform</i><br/>
<blockquote>$ionic cordova platform add android</blockquote>
<br/>
<i>To add iOS platform</i><br/>
<blockquote>$ionic cordova platform add ios</blockquote>
<h3>Build an android apk</h3>
<blockquote>$ionic cordova build android</blockquote>
<hr> 
While building an APK you might yet an error => <strong>Module not found: Error: Can't resolve 'promise-polyfill' </strong><br>
Refer this issue => https://github.com/ionic-team/ionic-app-scripts/issues/1001

<b>Solution: </b>
<blockquote>npm install promise-polyfill --save-exact</blockquote>

and then run the command
<blockquote>ionic cordova build android</blockquote>




