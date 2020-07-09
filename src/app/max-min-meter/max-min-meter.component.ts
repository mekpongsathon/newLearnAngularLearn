import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.css']
})
export class MaxMinMeterComponent implements OnInit {
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  doMinChange(value: number) {
    this.minChange.emit(value);
  }

  doMaxChange(value: number) {
    this.maxChange.emit(value);
  }

}
