import { Component, HostListener } from '@angular/core';
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
  // Öffnen/Schließen eines Dropdowns
  toggleDropdown(menu: string): void {
    Object.keys(this.dropdownStates).forEach((key) => {
      this.dropdownStates[key] = key === menu ? !this.dropdownStates[key] : false;
    });
  }

  // Alle Dropdowns schließen, wenn außerhalb geklickt wird
  @HostListener('document:click', ['$event'])
  closeAllDropdowns(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.dropdownStates = {};
    }
  }

  // Überprüft, ob ein Menüpunkt aktiv ist
  isActive(...routes: string[]): boolean {
    return routes.some((route) => this.router.url.includes(route));
  }
}