import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
  <ul class="item">
  <li *ngFor="let category of categorys">
    <span class="badge">{{category.id}}</span> {{category.name}}
  </li>
</ul>

  `,
  styles: []
})
export class CategoryComponent implements OnInit {




  public departments = [
    {"id": 1, "name": "Speakers"},
    {"id": 2, "name": "Mouse"},
    {"id": 3, "name": "Keyboard"},
    {"id": 4, "name": "Pendrive"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
