import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeOut: Recipe;
  @Output() recipeClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipe: Recipe) {
    this.recipeClicked.emit(); // no need to pass recipe here
  }

}
