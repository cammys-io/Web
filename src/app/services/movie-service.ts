import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../pages/movies/movies';
import { Movie } from '../pages/interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url = environment.baseUrl;
  private http = inject(HttpClient);

  getmovies() {
    return this.http.get<Movie[]>(`${this.url}movie`);
  }

  postMovie(body: Movies) {
    return this.http.post<Movie>(`${this.url}movie`, body);
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.url}movie/${id}`, { responseType: 'text' });
  }
}
