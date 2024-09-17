import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Observable } from 'rxjs';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  pedidosListos$: Observable<Pedido[]>;

  constructor(private pedidoService: PedidoService) {
    this.pedidosListos$ = this.pedidoService.getPedidosListos();
  }

  ngOnInit(): void {}

  entregar(pedido: Pedido) {
    this.pedidoService.entregarPedido(pedido);
  }
}
