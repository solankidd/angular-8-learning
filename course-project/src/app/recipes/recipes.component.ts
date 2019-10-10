import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes = [];
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(event) {
    this.selectedRecipe = event;
  }

}
