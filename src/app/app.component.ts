import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-project';
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';
  squareHeight = 100;
  squareWidth = 250;
  appCouter = 20;

  activate: boolean = false;

  mek = 'Pongsathon';
  disName() {
    console.log('mekConsole: ', this.mek);
  }
  changeName(name: string) {
    this.mek = name;
  }

  testClick() {
    console.log('test click ');
  }

  testNUmberChange(value: number) {
    console.log('test number change from app action bar:', value);
  }

  doAppMinChange(value: number) {
    console.log('test minChange event: ', value);
  }
  doAppMaxChange(value: number) {
    console.log('test maxChange event: ', value);
  }

}
