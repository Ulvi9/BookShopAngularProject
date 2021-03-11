import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id :number;
  editMode:boolean;
  recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=params["id"];
      this.editMode=params["id"]!=null;
      this.formInit();
    })
  }
  private formInit(){
    let recipeName="";
    let recipeDescription="";
    let recipeImagePath="";
    let recipeIngredients=new FormArray([]);
    if (this.editMode){
      let recipe=this.recipeService.getRecipe(this.id);
      recipeName=recipe.name;
      recipeDescription=recipe.description;
      recipeImagePath=recipe.imagePath;
      if (recipe['ingredients']){
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            "name":new FormControl(ingredient.name),
            "amount":new FormControl(ingredient.amout)
          }))
        }
      }
    }
    this.recipeForm=new FormGroup({
      "name":new FormControl(recipeName),
      "imagePath":new FormControl(recipeImagePath),
      "description":new FormControl(recipeDescription),
      "ingredients":recipeIngredients
    })
  }

  onSubmitForm() {

  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        "name":new FormControl(),
        "amount":new FormControl()
      })
    )
  }
}
