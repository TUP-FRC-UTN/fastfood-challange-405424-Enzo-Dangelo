import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSellComponent } from "./Componentes/point-of-sell/point-of-sell.component";
import { CocinaComponent } from "./Componentes/cocina/cocina.component";
import { EntregaComponent } from "./Componentes/entrega/entrega.component";
import { RestauranteComponent } from "./Componentes/restaurante/restaurante.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PointOfSellComponent, CocinaComponent, EntregaComponent, RestauranteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastFood';
}
