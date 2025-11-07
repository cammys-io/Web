import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { Movies } from '../movies/movies';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-table-movies',
  imports: [],
  templateUrl: './tableMovies.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TableMovies {
  movies: Movie[] = [];
  private router = inject(Router);
  private movieService = inject(MovieService);
  agregarPelicula() {
    this.router.navigate(['/add-movie']);
  }
  constructor() {
    this.getMovies();
  }
  getMovies() {
    this.movieService.getmovies().subscribe({
      next: (pelis) => {
        console.log('cd', pelis);
        this.movies = pelis;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
