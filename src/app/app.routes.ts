import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

export const routes: Routes =  [
  { path: '', component: HomeComponent }, 
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: '**', redirectTo: '' }, 
];
  @NgModule({
    declarations: [],
    imports: [ CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  