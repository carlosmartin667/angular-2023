import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public listNameHero: string[] = [
    'Spider-Man',
    'Iron Man',
    'Capitana Marvel',
    'Thor',
    'Hulk',
  ];
  public deleteHerore?: string = '';

  public ElimarUltimo(): void {
    this.deleteHerore = this.listNameHero.pop();
  }
}
