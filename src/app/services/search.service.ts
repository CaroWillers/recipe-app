import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchQuery$: Observable<string> = this.searchQuerySubject.asObservable();

  constructor() {}

  // Getter und Setter für die Suchanfrage
  get searchQuery(): string {
    return this.searchQuerySubject.value;
  }

  set searchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  // Methode, die bei der Eingabe ausgelöst wird
  onSearch(): void {
    console.log('Search query:', this.searchQuery);
    // Optional: Trigger Aktionen, z. B. Suche im Backend
  }
}
