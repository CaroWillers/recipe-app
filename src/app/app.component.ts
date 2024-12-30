import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-app';


onActivate(event: any): void {
  console.log('Activated component:', event.constructor.name);
}
}
