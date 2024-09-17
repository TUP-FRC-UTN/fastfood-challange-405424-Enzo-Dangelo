import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})

export class POSComponent {
  nombre: string = '';
  descripcionPedido: string = '';

  constructor(private pedidoService: PedidoService) {}

  ordenar() {
    if (this.nombre && this.descripcionPedido) {
      const nuevoPedido: Pedido = {
        number: Math.floor(Math.random() * 1000) + 1,
        name: this.nombre,
        description: this.descripcionPedido,
        date: new Date()
      };
      this.pedidoService.agregarPedido(nuevoPedido);
      this.nombre = '';
      this.descripcionPedido = '';
    }
  }
}
