import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged=new EventEmitter<Ingredient[]>();
private ingredients:Ingredient[]=[
  new Ingredient('Apples',5),
  new Ingredient('Tomato',15,)
];
 getIngredients(){
  return this.ingredients.slice();
}
 addIngredient(ingredient:Ingredient){
   this.ingredients.push(ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
}
 addIngredients(ingredients:Ingredient[]){
   // for (let ingredient of ingredients){
   //   this.ingredients.push(ingredient)
   // }
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.emit(this.ingredients.slice());
 }
  constructor() { }
}
