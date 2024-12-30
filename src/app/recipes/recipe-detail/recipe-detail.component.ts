import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RECIPES } from '../../../assets/recipes/pasta';
import { Recipe, Ingredient } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RecipeDetailComponent implements OnInit {
  recipe$!: Observable<Recipe>;
  localRecipes = RECIPES;
  portion: number = 1;
  adjustedIngredients: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipe$ = this.route.paramMap.pipe(
      map((params) => params.get('id')!),
      map((id) => {
        const localRecipe = this.localRecipes.find((recipe) => recipe.id === id);
        if (!localRecipe) {
          console.error('Rezept nicht gefunden:', id);
          throw new Error('Rezept nicht gefunden');
        }
        return localRecipe;
      })
    );

    this.recipe$.subscribe((recipe) => {
      if (recipe) {
        console.log('Loaded Recipe:', recipe);
        this.portion = recipe.portion || 1;
        this.updateIngredients(recipe);
      }
    });
  }

  updateIngredients(recipe: Recipe): void {
    if (!recipe.ingredients || !Array.isArray(recipe.ingredients)) {
      console.error('Ingredients are not an array or are missing.');
      this.adjustedIngredients = [];
      return;
    }

    this.adjustedIngredients = recipe.ingredients.map((ingredient) => {
      return `${ingredient.amount * this.portion} ${ingredient.unit} ${ingredient.name}`;
    });
  }

  onPortionChange(): void {
    this.recipe$.subscribe((recipe) => {
      this.updateIngredients(recipe);
    });
  }
}
