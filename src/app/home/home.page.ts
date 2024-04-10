import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { MovieService } from '../Services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCardHeader, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel],
})

export class HomePage implements OnInit{
  movies:any = [];
  constructor(private movieService:MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
      }
    );
  }
}
