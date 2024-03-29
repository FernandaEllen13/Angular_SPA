import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/i-movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {
    movies: IMovie[] = [];

    constructor(private service: MovieService) {}

    ngOnInit(): void {
      this.movies = [
        {id:4, title:'Juno',category:'Drama'},
        {id:5, title:'Shrek',category:'Comédia'},
        {id:6, title:'Interestelar',category:'Ficção'},
      ];

    //apenas para debug:
    for(let m of this.movies){
      console.log(m.id);
      console.log(m.title);
      console.log(m.category);
    }
    }
}

