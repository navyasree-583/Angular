import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

// @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
// @ViewChild('amountInput') amountInputRef: ElementRef | undefined;
//@Output() ingredientAdded = new EventEmitter<Ingredient>();

constructor(private slService: ShoppingListService){

}
onAddItem(form:NgForm){
  const value = form.value;
  // const ingName = this.nameInputRef?.nativeElement.value;
  // const ingAmount = this.amountInputRef?.nativeElement.value;
  const newIngredient = new Ingredient(value.name,value.amount);
  this.slService.addIngredient(newIngredient);
  
}

}
