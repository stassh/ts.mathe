import { Component } from '@angular/core';
import { CalculationTask } from './model/CalculationTask';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mathe';

  // taskInfo: CalculationTask = new CalculationTask(35, 54, '+', 89);

  taskInfos: CalculationTask[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.taskInfos.push(new CalculationTask(i, i, '+', i + i));
    }
  }
}
