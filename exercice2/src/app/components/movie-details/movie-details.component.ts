// movie-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: number;
  movieDetails: any; // Vous devez définir le type approprié ici

  constructor(private favoritesService: FavoritesService,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = +params.get('id'); // Récupérer l'ID du film depuis l'URL
      this.getMovieDetails();
    });
  }
  addToFavorites(movie: any) {
    this.favoritesService.addFavorite(movie); // Appel du service de favoris pour ajouter le film
  }

  getMovieDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe((data: any) => {
      this.movieDetails = data;
    });
  }
}
