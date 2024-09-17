import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Observable } from 'rxjs';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  pedidosPendientes$: Observable<Pedido[]>;
  pedidosEnCoccion$: Observable<Pedido[]>;

  constructor(private pedidoService: PedidoService) {
    this.pedidosPendientes$ = this.pedidoService.getPedidosIngresados();
    this.pedidosEnCoccion$ = this.pedidoService.getPedidosEnCocina();
  }

  ngOnInit(): void {}

  cocinar(pedido: Pedido) {
    this.pedidoService.tomarParaCocinar(pedido);
  }

  terminarCoccion(pedido: Pedido) {
    this.pedidoService.terminarCoccion(pedido);
  }
}
