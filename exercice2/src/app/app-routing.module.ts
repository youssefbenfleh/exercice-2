import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' }, // Default route redirects to /movies
  { path: 'movies', component: MovieListComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'favorites', component: FavoritesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
