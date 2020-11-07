import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeOut: Recipe;
  @Output() recipeItemClickedPassedToList = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClicked(recipe: Recipe) {
    this.recipeItemClickedPassedToList.emit(); // no need to pass recipe here
    // because in recipe-list.component.html we are passing from ngFor directly
  }

}
