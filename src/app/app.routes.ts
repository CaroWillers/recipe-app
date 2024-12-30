import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';

export const routes: Routes =  [
  { path: '', component: HomeComponent }, 
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'category/:categoryName', component: CategoryOverviewComponent },
  { path: '**', redirectTo: '' }, 
];
  @NgModule({
    declarations: [],
    imports: [ CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  