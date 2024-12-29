import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../../assets/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  /**
   * Alle Rezepte abrufen
   */
  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);  
  }

  /**
   * Einzelnes Rezept nach ID abrufen
   */
  getRecipeById(id: string): Observable<Recipe | undefined> {
    const recipe = RECIPES.find((r) => r.id === id);
    console.log('Gefundenes Rezept:', recipe);  
    return of(recipe);
  }
  
}
