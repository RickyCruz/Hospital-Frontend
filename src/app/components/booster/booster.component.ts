import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styles: []
})
export class BoosterComponent implements OnInit {

  @Input('label') label: string = 'Label';
  @Input('progress') percentage: number = 50;

  @Output('progressChanged') progressChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Label: ' + this.label);
    // console.log('Progress: ' + this.percentage);
  }

  ngOnInit() {
    // console.log('Label: ' + this.label);
    // console.log('Progress: ' + this.percentage);
  }

  onChange(newValue: number) {
    let elemHTML: any = document.getElementsByName('progress')[0];

    if (newValue > 100) {
      this.percentage = 100;
    } else if(newValue < 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }

    elemHTML.value = Number(this.percentage);

    this.progressChanged.emit(this.percentage);
  }

  changeValue(value: number) {
    if (this.percentage >= 100 && value > 0) {
      this.percentage = 100;
      return;
    }

    if (this.percentage <= 0 && value < 0) {
      this.percentage = 0;
      return;
    }

    this.percentage += (value * 1);

    this.progressChanged.emit(this.percentage);
  }

}
