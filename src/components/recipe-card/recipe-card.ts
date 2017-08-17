import { Component, Input } from '@angular/core';

@Component({
  selector: 'recipe-card',
  templateUrl: 'recipe-card.html'
})
export class RecipeCard {

  @Input() recipe: any;
  private isDescriptionShown: boolean = false;

  constructor() {
  }

  toggleDescripton() {
    this.isDescriptionShown = !this.isDescriptionShown;
  }

}
