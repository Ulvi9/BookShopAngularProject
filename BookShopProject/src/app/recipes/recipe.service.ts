import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected=new EventEmitter<Recipe>()
  private recipes: Recipe[]=[
    new  Recipe('Tasty Shintezel','What else you need to say lorem',

      'data:image/jpeg;base64,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',
      [
        new Ingredient("Meat",1),
        new Ingredient("Frensh",2)
      ]),
    new  Recipe('Big Fat Burger','Just delicious lorem ipsum doler ',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRTJ1Msmqoi8Ipyj0GDXdAZxzCoJ9B-jApA&usqp=CAU',
      [
        new Ingredient("Tomato",1),
        new Ingredient("Onion",2)
      ])
  ];
  setRecipe(recipes:Recipe[]){
    this.recipes=recipes;
  }
  getRecipes(){
    return this.recipes.slice();
  };
  getRecipe(index:number){
    return this.recipes[index];
  };
  addIngredientsShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);

  }
  constructor(private shoppingListService:ShoppingListService) { }
}
