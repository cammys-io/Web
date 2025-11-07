import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-movie',
  imports: [FormsModule],
  templateUrl: './formMovie.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMovie {
  private movieService = inject(MovieService);
  private router = inject(Router);

  newMovie: Movie = {
    title: '',
    sinopsis: '',
    genre: '',
    releaseYear: 0,
    poster_url: '',
    rating: 0,
  };
  saveMovie() {
    console.log(this.newMovie);
    this.movieService.postMovie(this.newMovie).subscribe({
      next: (pelicula) => {
        console.log('pelicula guardada:', pelicula);
        this.router.navigate(['/table-movies']);
      },
      error: (error) => {
        console.error('error al guardar:', error);
      },
    });
  }
}
