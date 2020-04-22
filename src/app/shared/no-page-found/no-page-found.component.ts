import { Component, OnInit } from '@angular/core';

declare function initPlugins();

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styles: []
})
export class NoPageFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initPlugins();
  }

}
