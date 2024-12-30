import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Recipe } from '../models/recipe.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, TitleCasePipe, RouterModule],
})
export class CategoryOverviewComponent implements OnInit {
  categoryName: string = '';
  recipes: Recipe[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('categoryName') || '';
    console.log('Loaded category:', this.categoryName);
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getRecipesByCategory(this.categoryName).subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        console.log('Recipes loaded:', this.recipes);
      },
      error: (error) => {
        console.error('Error loading recipes:', error);
      },
    });
  }

  viewRecipe(id: string): void {
    this.router.navigate(['/recipes', id]);
  }
}
