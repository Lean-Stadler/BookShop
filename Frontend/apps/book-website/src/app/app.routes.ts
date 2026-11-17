import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BooksComponent } from './books.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'BookStoreTest',
  },
  {
    path: 'buecher',
    component: BooksComponent,
    title: 'Bücher | Rise of the Shadows',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
