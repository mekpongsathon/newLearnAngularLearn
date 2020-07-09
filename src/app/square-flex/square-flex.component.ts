import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  templateUrl: './square-flex.component.html',
  styleUrls: ['./square-flex.component.css']
})
export class SquareFlexComponent implements OnInit {
  @Input() divWith = 200;
  @Input() divHeight = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
