import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe, Ingredient } from '../models/recipe.model';
import { RECIPES } from '../../assets/recipes/pasta';
import { RECIPES as FLEISCH_RECIPES } from '../../assets/recipes/Fleisch';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { from as rxjsFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipesCollection;

  constructor(private firestore: Firestore) {
    this.recipesCollection = collection(this.firestore, 'recipes');
  }

  /**
   * Alle Rezepte abrufen (lokal oder Firebase)
   */
  getRecipes(): Observable<Recipe[]> {
    return collectionData(this.recipesCollection, { idField: 'id' }).pipe(
      map((recipes: any[]) =>
        recipes.map((recipe) => this.mapToRecipe(recipe))
      )
    );
  }

  /**
   * Rezept nach ID abrufen
   */
  getRecipeById(id: string): Observable<Recipe> {
    const recipeDocRef = doc(this.firestore, `recipes/${id}`);
    return rxjsFrom(
      getDoc(recipeDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          return this.mapToRecipe(docSnap.data());
        } else {
          console.warn(`Recipe with ID "${id}" not found in Firestore. Falling back to local data.`);
          const fallbackRecipe = RECIPES.find((recipe) => recipe.id === id) || FLEISCH_RECIPES.find((recipe) => recipe.id === id);
          if (fallbackRecipe) {
            return fallbackRecipe;
          } else {
            throw new Error(`Recipe with ID "${id}" not found locally or in Firestore.`);
          }
        }
      })
    );
  }

  /**
   * Rezepte nach Kategorie filtern
   */
  getRecipesByCategory(category: string): Observable<Recipe[]> {
    return of(
      [...RECIPES, ...FLEISCH_RECIPES].filter((recipe) =>
        recipe.categories.some((cat) =>
          cat.toLowerCase().includes(category.toLowerCase())
        )
      )
    );
  }
  
  
  /**
   * Likes für ein Rezept aktualisieren
   */
  updateLikes(id: string, newLikes: number): Promise<void> {
    const recipeDocRef = doc(this.firestore, `recipes/${id}`);
    return setDoc(recipeDocRef, { likes: newLikes }, { merge: true });
  }

  /**
   * Kommentar zu einem Rezept hinzufügen
   */
  addComment(
    id: string,
    comment: { username: string; text: string; timestamp: string }
  ): Promise<void> {
    const recipeDocRef = doc(this.firestore, `recipes/${id}`);
    return setDoc(
      recipeDocRef,
      {
        comments: [comment],
      },
      { merge: true }
    );
  }

  /**
   * Lokale Rezepte in Firebase importieren
   */
  async addRecipesToFirestore() {
    for (const recipe of [...RECIPES, ...FLEISCH_RECIPES]) {
      const recipeDocRef = doc(this.firestore, `recipes/${recipe.id}`);
      const docSnap = await getDoc(recipeDocRef);
      if (!docSnap.exists()) {
        await setDoc(recipeDocRef, recipe)
          .then(() => console.log(`Recipe "${recipe.title}" added successfully!`))
          .catch((error) => console.error('Error adding recipe: ', error));
      } else {
        console.log(`Recipe "${recipe.title}" already exists in Firestore.`);
      }
    }
  }

  /**
   * Hilfsmethode: Rezeptdaten aus Firebase in ein Recipe-Objekt umwandeln
   */
  private mapToRecipe(data: any): Recipe {
    const ingredients: Ingredient[] = Array.isArray(data.ingredients)
      ? data.ingredients.map((ingredient: any) => {
          if (typeof ingredient === 'object' && ingredient.amount && ingredient.unit && ingredient.name) {
            return ingredient as Ingredient;
          }
          if (typeof ingredient === 'string') {
            const [amount, unit, ...nameParts] = ingredient.split(' ');
            return {
              amount: parseFloat(amount) || 0,
              unit,
              name: nameParts.join(' '),
            } as Ingredient;
          }
          throw new Error(`Invalid ingredient format: ${JSON.stringify(ingredient)}`);
        })
      : [];

    return {
      id: data.id || '',
      title: data.title || '',
      description: data.description || '',
      ingredients,
      instructions: data.instructions || [],
      categories: data.categories || [],
      image: data.image || '',
      prepTime: data.prepTime || 0,
      portion: data.portion || 0,
      likes: data.likes || 0,
      comments: data.comments || [],
    };
  }
}
