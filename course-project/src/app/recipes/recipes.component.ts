import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes = [];
  selectedRecipe: Recipe;
  name: string = 'no-param';
  name2: string = 'no-param';
  allowEdit: string = 'no-qparam';
  fragment: string = 'no-qparam';
  paramSubscription: Subscription;
  queryParamSubscription: Subscription;
  fragmentSubscription: Subscription;

  constructor(private recipeService: RecipesService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
    this.name = this.activeRoute.snapshot.params['name'];
    this.name2 = this.activeRoute.snapshot.params['name2'];
    this.allowEdit = this.activeRoute.snapshot.queryParams['allowEdit'];
    this.fragment = this.activeRoute.snapshot.fragment;
    

    // why we need this?
    // if we hit , <a [routerLink]="['/recipes','dhaval2','solanki2']">Load name:dhaval, name2:solanki</a> it will not reload
    // now this obesrvable will pass the updated data to its callback and we would get the latest data
    this.paramSubscription = this.activeRoute.params
    .subscribe(
      (updatedParams: Params)=>{
        this.name = updatedParams['name'];
        this.name2 = updatedParams['name2'];
      }
    )
    
    // if I put only above observable, it was working!
    this.queryParamSubscription = this.activeRoute.queryParams
    .subscribe(
      (updatedQueryParams: Params)=>{
        this.allowEdit = updatedQueryParams['allowEdit'];
      }
    )

    this.fragmentSubscription = this.activeRoute.fragment
    .subscribe(
      (updatedFragment: string)=>{
        console.log(updatedFragment);
        this.fragment = updatedFragment;
      }
    )
    
  }

  ngOnDestroy() {
    //angular will destroy it for you, this is just for the knowledge 
    // this type of pattern will be useful for custom observables
    this.paramSubscription.unsubscribe();
    this.queryParamSubscription.unsubscribe();
    this.fragmentSubscription.unsubscribe();
  }
}
