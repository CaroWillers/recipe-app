import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ViewEncapsulation } from '@angular/core'; 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, MatMenuModule, MatButtonModule, MatIconModule, RouterModule,],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None, 
})

export class HeaderComponent {
  menuOpen: boolean = false;
  dropdownStates: Record<string, boolean> = {};
  activeMenu: string | null = null;

  constructor(public searchService: SearchService, private router: Router) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleDropdown(menu: string): void {
    // Toggle the specified menu and close others
    this.activeMenu = this.activeMenu === menu ? null : menu;
    Object.keys(this.dropdownStates).forEach((key) => {
      this.dropdownStates[key] = key === this.activeMenu;
    });
  }

  isActive(...routes: string[]): boolean {
    // Check if any of the routes match the current URL
    return routes.some((route) => this.router.url.includes(route));
  }

  isMenuActive(menu: string): boolean {
    // Check if the menu is currently active
    return this.activeMenu === menu;
  }

  @HostListener('document:click', ['$event'])
  closeMenus(event: Event): void {
    // Close dropdowns when clicking outside the menu
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.activeMenu = null;
      Object.keys(this.dropdownStates).forEach((key) => {
        this.dropdownStates[key] = false;
      });
    }
  }   
}
