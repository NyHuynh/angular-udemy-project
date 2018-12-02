import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Beef Steak'
      , 'A super tasty Beef Steak - just awesome!',
       'https://www.hoidaubepaau.com/wp-content/uploads/2017/12/bo-beefsteak.jpg',
       [
         new Ingredient('Beef', 1),
         new Ingredient('Potato', 1)
       ]),
    new Recipe(
      'Big Fat Burger',
       'What else you need to say?',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0OfIsMu0S5406JeX7xI0fEsBsWuxpG-PpwlFpLnHgAcBX3Gx',
       [
          new Ingredient('Meat', 1),
          new Ingredient('Buns', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){};

  getRecipes() {
    return this.recipes.slice();
  };

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
