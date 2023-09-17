// movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'a59ccb3488a6c18769043783f024e671';
  private apiUrl = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {
    return this.http.get(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query: query
      }
    });
  }
  getMovies() {
    return this.http.get(this.apiUrl + 'movie/popular',
      {
        params: {
          api_key: this.apiKey,
        }
      });
  }

  getMovieDetails(id: number) {
    return this.http.get(`${this.apiUrl}/movie/${id}`, {
      params: {
        api_key: this.apiKey
      }
    });
  }
}
