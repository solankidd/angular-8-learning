import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputRef', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInputRef', { static: true }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    //this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.add(newIngredient);
  }

  loadRecipes() {
    //even if I use only 'recipes' here, it is working
    this.router.navigate(['recipes']);
  }

  loadRecipesWithRelative() {
    //even if I use only 'recipes' here, it is working
    this.router.navigate(['recipes'], {relativeTo: this.activeRoute});
  }
  loadRecipesWithQPandF() {
    //even if I use only 'recipes' here, it is working
    this.router.navigate(['recipes', 'dhaval', 'solanki'], {queryParams: {allowEdit:1}, fragment:'loading1'});
  }
}
