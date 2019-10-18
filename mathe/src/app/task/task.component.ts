import { Component, OnInit, Input } from '@angular/core';
import { CalculationTask } from '../model/CalculationTask';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskInfo: CalculationTask;
  hasValidationError = true;
  result = '';
  solved = false;
  status = 'check_box_outline_blank';

  // indeterminate_check_box
  // check_box
  constructor() { }

  ngOnInit() {
  }

  checkResult() {
    this.solved = true;

    if (Number.parseInt(this.result, 10) === this.taskInfo.result) {
      this.status = 'check_box';
    } else {
      this.status = 'indeterminate_check_box';
    }
  }

}
