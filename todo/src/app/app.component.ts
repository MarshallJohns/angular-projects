import { Component } from '@angular/core';
import { ChangeColorService } from './service/change-color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private changeColorService: ChangeColorService) {}
  color: String = '#fff';
  title = 'todo';
  colorReset() {
    console.log('mouse over');
    this.color = '#fff';
  }
  changeColor() {
    this.color = this.changeColorService.randomColor();
    console.log('hitting');
  }
}
