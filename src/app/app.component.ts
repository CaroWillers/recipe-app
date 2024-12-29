import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './core/footer/footer.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FooterComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-app';
}
