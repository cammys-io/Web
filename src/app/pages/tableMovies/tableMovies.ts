import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-table-movies',
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

  constructor() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getmovies().subscribe({
      next: (pelis) => {
        this.movies = pelis;
      },
      error: (error) => {
        console.error('Error al obtener películas:', error);
      },
    });
  }

  agregarPelicula() {
    this.router.navigate(['/add-movie']);
  }

  eliminarPelicula(id: number) {
    if (confirm('¿Seguro que deseas eliminar esta película?')) {
      this.movieService.deleteMovie(id).subscribe({
        next: () => {
          this.movies = this.movies.filter((movie) => movie.id !== id);
          alert('Película eliminada correctamente.');
        },
        error: (error) => {
          console.error('Error al eliminar la película:', error);
          alert(
            `No se pudo eliminar la película:\nStatus: ${error.status}\nMensaje: ${error.message}`
          );
        },
      });
    }
  }
}
