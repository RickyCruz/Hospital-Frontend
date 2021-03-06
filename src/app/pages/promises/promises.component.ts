import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    // Listen promise
    this.countThree().then((message) => console.log('Finish! ', message))
      .catch(error => console.error('Error in promise: ', error));
  }

  ngOnInit() {
  }

  countThree(): Promise<string> {
    return new Promise((resolve, reject) => {
      let count = 0;

      let interval = setInterval(() => {
        count++;
        console.log(count);

        if (count === 3) {
          resolve('Okay');
          // reject('Whops! Something is wrong.');
          // stop interval
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
