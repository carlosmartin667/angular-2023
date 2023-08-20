import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 20;

  incrementador(): void {
    this.counter += 1;
  }
  menos(): void {
    this.counter -= 1;
  }
}
