import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from "./favorites/favorites.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  {path: 'home', component: ResultsComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', redirectTo: "/home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
