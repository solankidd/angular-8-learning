import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe 1',
            'This is test desc',
            'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-3-1.jpg',
            [
                new Ingredient('Chilly', 10),
                new Ingredient('Cheese', 11)
            ]
        ),
        new Recipe(
            'Test Recipe 2',
            'This is test desc',
            'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-3-1.jpg',
            [
                new Ingredient('Rice', 12)
            ]
        )
    ];

    getRecipes () {
        return this.recipes.slice(); 
    }

    addToShoppingList(ingredients : Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients); 
    }
}