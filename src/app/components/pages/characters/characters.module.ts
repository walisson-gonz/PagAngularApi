import { RouterModule } from '@angular/router';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const myComponents = [CharacterDetailsComponent, CharacterListComponent];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents],

})
export class CharactersModule { }
