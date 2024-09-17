import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastFood';
}
