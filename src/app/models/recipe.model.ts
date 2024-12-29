export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  categories: string[];
  image: string;
  prepTime: number;
  portion: number;
  likes: number;
  comments: {
    username: string;
    text: string;
    timestamp: string;
  }[];  
}
