import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredient[] | undefined;

  private igChangeSub: Subscription | any;

  constructor(private slService : ShoppingListService){
  }
  
  ngOnInit(){
    this.ingredients =  this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.
    subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients =  ingredients;
      }
    );

  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
