import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exercises = [
    {
      name: "Invoice",
      route: "invoice",
      labels: ["reactive forms", "pipes"],
    },
    {
      name: "Temperature",
      route: "temperature",
      labels: ["reactive forms"],
    },
    {
      name: "Sales Tax",
      route: "sales-tax",
      labels: ["reactive forms"],
    },
    {
      name: "Letter Count",
      route: "letter-count",
      labels: ["reactive forms", "ngPlural"],
    },
    {
      name: "Terms",
      route: "terms",
      labels: ["reactive forms"],
    },
    {
      name: "Password",
      route: "password",
      labels: ["reactive forms"],
    },
    {
      name: "Checkout",
      route: "checkout",
      labels: ["reactive forms", "ngIf"],
    },
    {
      name: "Stories",
      route: "stories",
      labels: ["reactive forms", "pipes"],
    },
    {
      name: "Email",
      route: "email",
      labels: ["reactive forms", "ngFor", "ngIf", "javascript split"],
    },
  ]

  constructor() {
  }

  findById(id) {
    return this.exercises.find(exercise => exercise.route === id);
  }

}
