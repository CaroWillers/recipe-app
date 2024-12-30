import { Recipe } from "../../app/models/recipe.model";

export const RECIPES: Recipe[] = [
  {
    id: 'Putenbraten',
    title: 'Annes Putenbraten',
    description: 'Klassischer Putenbraten mit Kartoffeln und Gemüse.',
    ingredients: [
      { amount: 1, unit: 'g', name: 'Putenbraten (Oberkeule mit Knochen' },
      { amount: 1/2, unit: 'Glas', name: 'Dijon Senf' },
      { amount: 3, unit: 'Essslöffel', name: 'Tomatenmark' },
      { amount: 1.5, unit: 'Liter', name: 'Hühnerfond' },
      { amount: 0.25, unit: 'Liter', name: 'Weißwein' },
      { amount: 1.5, unit: 'TL', name: 'Salz (nach Geschmack würzen)' },
      { amount: 3, unit: 'Prisen', name: 'Pfeffer' },
      { amount: 1, unit: 'Bund', name: 'Gemüse (Porree, Möhren, Sellerie...)' },
      { amount: 2, unit: 'Stück', name: 'Zwiebeln' },
      { amount: 1, unit: 'EL', name: 'Butaris zum Anbraten' },
    ],
    instructions: [
      'Den Putenbraten waschen und trocken tupfen. Die Haut kreuzeförmig einschneiden.',
      'Den Putenbraten dick mit Dijonsenf einstreichen',
      'Das Gemüse kleinscheiden',
      'Das Fleisch in Butaris anbraten von allen Seiten und danach aus dem Bräter herausnehmen',
      'Das Gemüse anschmoren und dann Fliesch und Gemüse mit der Brühe und Tomatenmark, Weißwein auf kleiner flamme garen', 
    ],
    categories: ['Hauptgerichte', 'Fleisch'],
    image: 'assets/img/Linguine-teaser.png',
    prepTime: 180,
    portion: 4,
    likes: 2,
    comments: [
      {
        username: 'foodie123',
        text: 'Ein tolles REzept für Gäste',
        timestamp: '2024-12-27T12:00:00Z',
      },
      {
        username: 'pasta_lover',
        text: 'Eigentlich ganz einfach zuzubereiten, dauert nur etwas',
        timestamp: '2024-12-28T14:30:00Z',
      },
    ],
  },
];
