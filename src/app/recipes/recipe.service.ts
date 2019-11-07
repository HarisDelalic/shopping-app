import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelectedEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1,
      'Wiener Schnitzel',
      'Description about Wiener Schnitzel',
      'https://thomassixt.de/wp-content/uploads/2016/07/Wiener-Schnitzel-Original.jpg',
      [
        new Ingredient('Schnitzel', 1),
        new Ingredient('Potato', 3),
        new Ingredient('Lemon', 0.25)
      ]),
    new Recipe(2,
      'Big Burger',
      'Description about Big Burger',
      'https://i.pinimg.com/originals/c7/b0/e9/c7b0e95209da5a0492edcd35cc52e555.jpg',
    [
      new Ingredient('Meat', 2),
      new Ingredient('Cheese', 2),
      new Ingredient('Cucumber', 1),
      new Ingredient('Bread', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find((r) => r.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
