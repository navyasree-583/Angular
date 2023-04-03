import { Injectable} from "@angular/core";
//import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
   // recipeSelected = new Subject<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7oJAsRV5BIL4Lzjej0KiNicCRldbIDqZWJrDrkKXJAfneSN-ty2EYIepTvBSl9bMTAs&usqp=CAU",
            [
               new Ingredient('Meat',1),
               new Ingredient('French Fries',20)
            ]),

        new Recipe(
         'Big Fat Burger',
         'What else you need to say?',
         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mbtg1wsd3zdqu3v3rpgd",
         [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
         ]),
      ];


    constructor(private slService: ShoppingListService){
        
    }
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);

    }
}