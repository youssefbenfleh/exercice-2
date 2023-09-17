import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: any[]; // Define the type for your movies
  favorites: number[] = []; // Initialize an array to store favorite movie IDs

  constructor(private movieService: MovieService, private favoritesService: FavoritesService) {}

  ngOnInit() {
    // Fetch the list of movies when the component is initialized
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });

    // Load favorites from the FavoritesService
    this.favorites = this.favoritesService.getFavorites();
  }
  addToFavorites(movie: any) {
    this.favoritesService.addFavorite(movie); // Appel du service de favoris pour ajouter le film
  }
  performSearch(query: string) {
    this.movieService.searchMovies(query).subscribe((data: any) => {
      this.movies = data.results;
    });
  }
  // Method to add or remove a movie from favorites
  toggleFavorite(movieId: number) {
    if (this.isFavorite(movieId)) {
      this.favoritesService.removeFavorite(movieId);
    } else {
      this.favoritesService.addFavorite(movieId);
    }
  }

  // Method to check if a movie is in favorites
  isFavorite(movieId: number): boolean {
    return this.favoritesService.isFavorite(movieId);
  }
}
