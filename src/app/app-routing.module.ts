import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

const routes: Routes = [
  { path: "", redirectTo: "charactersList", pathMatch: "full" },
  { path: "charactersList", component: CharactersListComponent, pathMatch: "full"},
  { path: "detail", component: CharacterDetailsComponent, pathMatch: "full"},
  // { path: "detail/:id", component: CharacterDetailsComponent, pathMatch: "full"},
  { path: "**", redirectTo: "main", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
