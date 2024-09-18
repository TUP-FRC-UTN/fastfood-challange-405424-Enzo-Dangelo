import { Component } from '@angular/core';
import { PedidosService } from '../../Services/pedidos.service';
import { Pedidos } from '../../Models/pedidos';

@Component({
  selector: 'app-entrega',
  standalone: true,
  imports: [],
  templateUrl: './entrega.component.html',
  styleUrl: './entrega.component.css'
})
export class EntregaComponent {

pedidos: Pedidos[] = [];

constructor(private pedidosService: PedidosService) { 
  this.pedidos = this.pedidosService.getPedidos();
}


entregar(pedido: Pedidos) {
  this.pedidosService.pedidoEntregado(pedido);
}

}
