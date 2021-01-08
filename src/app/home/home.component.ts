import { Component, OnInit } from '@angular/core';
import { ExerciseService } from "../exercise.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  exercises = [];

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    this.exercises = this.exerciseService.exercises;
  }

}
