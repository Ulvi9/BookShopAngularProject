import {Component, ElementRef,  OnInit,  ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  constructor(private shopListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  AddIngredient() {
    const nameIngredient = this.nameInputRef.nativeElement.value;
    const amountIngredient = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameIngredient, amountIngredient);
    this.shopListService.addIngredient(newIngredient);
  }
}
