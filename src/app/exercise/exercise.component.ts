import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ExerciseService } from "../exercise.service";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: []
})
export class ExerciseComponent implements OnInit {

  exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciseService
  ) {
  }

  ngOnInit(): void {
    this.exercise = this.exerciseService.findById(this.route.snapshot.firstChild.routeConfig.path);
  }

}
