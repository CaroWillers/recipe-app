import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RecipeDetailComponent implements OnInit {
  recipe$!: Observable<Recipe | undefined>;
  portion: number = 1;
  adjustedIngredients: string[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipe$ = this.route.paramMap.pipe(
      map((params) => {
        const id = params.get('id');
        console.log('Geladene ID:', id); // Debugging
        return id;
      }),
      switchMap((id) => this.recipeService.getRecipeById(id!))
    );

    this.recipe$.subscribe((recipe) => {
      if (recipe) {
        this.portion = recipe.portion || 1;
        this.updateIngredients(recipe.ingredients);
      }
    });
  }

  updateIngredients(ingredients: string[]): void {
    this.adjustedIngredients = ingredients.map((ingredient) =>
      ingredient.replace(/\d+/g, (match) => {
        const adjustedAmount = (+match * this.portion) / 4;
        return adjustedAmount.toFixed(1);
      })
    );
  }

  onPortionChange(): void {
    this.recipe$.subscribe((recipe) => {
      if (recipe) this.updateIngredients(recipe.ingredients);
    });
  }
}
