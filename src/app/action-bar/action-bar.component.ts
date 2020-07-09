import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  @Input() step: number = 1;
  @Output() couterChange = new EventEmitter();
  @Input() couter = 0;
  @Input() inputDisplay = true;
  constructor() { }

  ngOnInit(): void {
  }
  decreas() {
    console.log('ลบแล้ววว')
    if (this.couter - this.step >= 0) {
      this.couter = this.couter - this.step;
      this.couterChange.emit(this.couter);
    }
  }
  increas() {
    console.log('เพิ่มแล้ววว')
    this.couter = this.couter + this.step;
    this.couterChange.emit(this.couter);
  }

}
