import { Routes } from '@angular/router';
import { TableMovies } from './pages/tableMovies/tableMovies';
import { Movies } from './pages/movies/movies';
import { FormMovie } from './pages/formMovie/formMovie';

export const routes: Routes = [
  {
    path: 'tableMovies',
    component: TableMovies,
  },
  {
    path: 'add-movie',
    component: FormMovie,
  },
  {
    path: 'movies',
    component: Movies,
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'tableMovies',
  },
];
