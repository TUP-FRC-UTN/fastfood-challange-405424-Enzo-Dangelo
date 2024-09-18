import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../Services/pedidos.service';
import { Pedidos } from '../../Models/pedidos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent {

  pedidos: Pedidos[] = [];
  cocinaOcupada: boolean = false;

  constructor(private pedidosService: PedidosService) { 
    this.pedidos = this.pedidosService.getPedidos();
  }


  cocinar(pedido: Pedidos) {
    this.pedidosService.pedidoACocinar(pedido);
    this.cocinaOcupada = true;
  }

  terminarCoccion(pedido: Pedidos) {
    this.pedidosService.pedidoCocinado(pedido);
    this.cocinaOcupada = false;
  }


}
