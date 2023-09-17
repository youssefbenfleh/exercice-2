// favorites.component.ts
import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favoriteMovies: any[]; // Définissez le type approprié pour vos films

  constructor(private favoritesService: FavoritesService) {
    this.favoriteMovies = this.favoritesService.getFavorites(); // Récupérer la liste des favoris
  }
  removeFromFavorites(movie: any) {
    this.favoritesService.removeFavorite(movie);
    this.favoriteMovies = this.favoritesService.getFavorites();
  }
  
}
