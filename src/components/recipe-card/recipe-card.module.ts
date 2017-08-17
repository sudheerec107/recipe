import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeCard } from './recipe-card';

@NgModule({
  declarations: [
    RecipeCard,
  ],
  imports: [
    IonicPageModule.forChild(RecipeCard),
  ],
  exports: [
    RecipeCard
  ]
})
export class RecipeCardModule {}
