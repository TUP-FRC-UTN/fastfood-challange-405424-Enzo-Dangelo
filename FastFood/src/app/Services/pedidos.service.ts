import { Injectable } from '@angular/core';
import { Pedidos } from '../Models/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

  pedidos: Pedidos[] = [];

  
  getPedidos(): Pedidos[] {
    return this.pedidos;
  }

  crearPedido(name: string, description: string): void {
    const pedido: Pedidos = {
      number: Math.floor(Math.random() * 1000) + 1,
      name: name,
      description: description,
      date: new Date(),
      estado: 'pendienteDeCocinar'
    };
    this.pedidos.push(pedido);
  }

  pedidoACocinar(pedido: Pedidos): void {
    pedido.estado = 'cocinando';
  }

  pedidoCocinado(pedido: Pedidos): void {
    pedido.estado = 'cocinado';
  }

  pedidoEntregado(pedido: Pedidos): void {
    pedido.estado = 'entregado';
  }
}
