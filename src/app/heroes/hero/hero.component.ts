import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public nombre: string = 'hombre araña';
  public edad: number = 24;

  get capitalizeName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescripcion(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'iroman';
  }
  cambiarEdad(): void {
    this.edad = 40;
  }
  Reset(): void {
    this.nombre = 'hombre araña';
    this.edad = 24;
  }
}
