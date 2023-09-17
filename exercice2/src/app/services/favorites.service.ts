// favorites.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesKey = 'favorites';

  constructor() {}

  addFavorite(movieId: number) {
    const favorites = this.getFavorites();
    favorites.push(movieId);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  removeFavorite(movieId: number) {
    debugger;
    let favorites: any[] = this.getFavorites();
    const index = favorites.findIndex((fav) => fav.id === movieId);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  isFavorite(movieId: number): boolean {
    const favorites = this.getFavorites();
    return favorites.includes(movieId);
  }

  getFavorites(): number[] {
    const favoritesData = localStorage.getItem(this.favoritesKey);
    return favoritesData ? JSON.parse(favoritesData) : [];
  }
}
