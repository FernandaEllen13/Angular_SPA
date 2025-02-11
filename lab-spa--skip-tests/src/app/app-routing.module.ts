import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
   path: 'movietable',
   component: MovieTableComponent
  },
  {
    path: '',
    component: HomeComponent
   },
  {
    path: '**',
    component: NotFoundComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
