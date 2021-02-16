import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged=new EventEmitter<Ingredient[]>();
  startEditing=new Subject<number>();

  private ingredients:Ingredient[]=[
  new Ingredient('Apples',5),
  new Ingredient('Tomato',15,)
];
 getIngredients(){
  return this.ingredients.slice();
};
  getIngredient(index:number){
    return this.ingredients[index];
  }
 addIngredient(ingredient:Ingredient){
   this.ingredients.push(ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
};
  updateIngredient(index:number,ingredient:Ingredient){
    this.ingredients[index]=ingredient;
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
