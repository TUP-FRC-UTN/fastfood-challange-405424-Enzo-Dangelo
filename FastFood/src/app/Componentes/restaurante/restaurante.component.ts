import { Component } from '@angular/core';
import { EntregaComponent } from "../entrega/entrega.component";
import { PointOfSellComponent } from "../point-of-sell/point-of-sell.component";
import { CocinaComponent } from "../cocina/cocina.component";
import { PedidosService } from '../../Services/pedidos.service';
import { Pedidos } from '../../Models/pedidos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [EntregaComponent, PointOfSellComponent, CocinaComponent, FormsModule, CommonModule],
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.css'
})
export class RestauranteComponent {

pedidos: Pedidos[] = [];

  constructor(private pedidosService: PedidosService) { 
    this.pedidos = this.pedidosService.getPedidos();
  }
}
