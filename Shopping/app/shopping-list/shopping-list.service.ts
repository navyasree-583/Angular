//import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',5),
      ];

    getIngredients(){
        return this.ingredients.slice();
       }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    
    addIngredients(ingredients:Ingredient[]){
      // for( let ingredient of ingredients){
      //   this.addIngredient(ingredient);
      // }
       this.ingredients.push(...ingredients); 
      //spread operator
       this.ingredientsChanged.next(this.ingredients.slice());
    }
}