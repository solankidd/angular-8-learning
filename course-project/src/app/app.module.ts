import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { NineServiceStartComponent } from './nine-service-start/nine-service-start.component';
import { AccountComponent } from './nine-service-start/account/account.component';
import { NewAccountComponent } from './nine-service-start/new-account/new-account.component';
import { RouterModule, Routes } from '@angular/router';

// if not using providedIn we have to add as below and pass it into providers: []
// import { AccountService } from './nine-service-start/account.service';
// import { LoggingService } from './nine-service-start/logging.service';

const appRoutes : Routes = [
  { path: 'recipes', component: RecipesComponent},
  { path: 'shoplist', component: ShoppingListComponent},
  { path: 'nineservice', component: NineServiceStartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    NineServiceStartComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
