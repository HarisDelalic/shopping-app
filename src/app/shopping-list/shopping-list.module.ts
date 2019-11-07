import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingItemComponent} from './shopping-item/shopping-item.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule ({
  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingItemComponent
  ],
  providers: []
})
export class ShoppingListModule { }
