import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public searchService: SearchService, private router: Router) {}
  menuOpen = false;
  dropdownStates: { [key: string]: boolean } = {};

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleDropdown(menu: string): void {
    // Setzt den aktuellen Dropdown auf sichtbar und schließt andere
    Object.keys(this.dropdownStates).forEach((key) => {
      this.dropdownStates[key] = key === menu ? !this.dropdownStates[key] : false;
    });
  }

  isActive(...routes: string[]): boolean {
    // Überprüft, ob eine der übergebenen Routen aktiv ist
    return routes.some((route) => this.router.url.includes(route));
  }
}