import { Recipe } from "../../app/models/recipe.model";

export const RECIPES: Recipe[] = [
  {
    id: 'linguine',
    title: 'Linguine mit Zucchini & Zitrone',
    description: 'Ein leichtes, sommerliches Pasta-Rezept mit frischen Zutaten und tollem Geschmack.',
    ingredients: [
      { amount: 150, unit: 'g', name: 'Linguine' },
      { amount: 2, unit: '', name: 'Zucchini (gelb und grün)' },
      { amount: 15, unit: 'g', name: 'Bund Minze' },
      { amount: 30, unit: 'g', name: 'Parmesan' },
      { amount: 1, unit: '', name: 'Bio-Zitrone' },
      { amount: 1, unit: 'Prise', name: 'Salz' },
      { amount: 1, unit: 'Prise', name: 'Pfeffer' },
      { amount: 1, unit: 'EL', name: 'Olivenöl' },
    ],
    instructions: [
      'Die Pasta in kochendem Salzwasser nach Packungsangabe garen, dann abgießen und dabei einen Becher Kochwasser auffangen.',
      'Zucchini längs halbieren und dann mit einem Messer oder Julienneschneider in lange dünne Streifen schneiden.',
      'In einer großen beschichteten Pfanne 1 EL Olivenöl bei mittlerer bis hoher Temperatur erhitzen und die Zucchini darin 4 Minuten anschwitzen.',
      'Minzeblätter in feine Streifen schneiden und nach und nach in die Pfanne geben.',
      'Die abgetropfte Pasta mit einem Schuss Kochwasser unter die Zucchini ziehen.',
      'Den größten Teil des Parmesans und etwas Zitronenschale in die Pfanne reiben. Den gesamten Saft der Frucht dazupressen und alles gründlich durchheben.',
      'Die Linguine mit Meersalz und schwarzem Pfeffer abschmecken.',
      'Vor dem Servieren den restlichen Parmesan über die Pasta reiben und 1 TL Olivenöl dazugeben. Guten Appetit!'
    ],
    categories: ['Pasta'],
    image: 'assets/img/Linguine-teaser.png',
    prepTime: 20,
    portion: 4,
    likes: 42,
    comments: [
      {
        username: 'foodie123',
        text: 'Super lecker und einfach zuzubereiten!',
        timestamp: '2024-12-27T12:00:00Z',
      },
      {
        username: 'pasta_lover',
        text: 'Ein tolles Sommerrezept!',
        timestamp: '2024-12-28T14:30:00Z',
      },
    ],
  },
];
