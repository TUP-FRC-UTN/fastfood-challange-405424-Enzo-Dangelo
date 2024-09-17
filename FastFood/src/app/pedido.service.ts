import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedidosIngresados = new BehaviorSubject<Pedido[]>([]);
  private pedidosEnCocina = new BehaviorSubject<Pedido[]>([]);
  private pedidosListos = new BehaviorSubject<Pedido[]>([]);

  constructor() { }

  getPedidosIngresados(): Observable<Pedido[]> {
    return this.pedidosIngresados.asObservable();
  }

  getPedidosEnCocina(): Observable<Pedido[]> {
    return this.pedidosEnCocina.asObservable();
  }

  getPedidosListos(): Observable<Pedido[]> {
    return this.pedidosListos.asObservable();
  }

  agregarPedido(pedido: Pedido) {
    const pedidosActuales = this.pedidosIngresados.value;
    this.pedidosIngresados.next([...pedidosActuales, pedido]);
  }

  tomarParaCocinar(pedido: Pedido) {
    const pedidosEnCocinaActuales = this.pedidosEnCocina.value;
    
    if (pedidosEnCocinaActuales.length > 0) {
      console.log("Solo se permite un pedido a la vez");
      return;
    }
    
    const pedidosIngresadosActuales = this.pedidosIngresados.value;
    this.pedidosIngresados.next(pedidosIngresadosActuales.filter(p => p.number !== pedido.number));
    this.pedidosEnCocina.next([...pedidosEnCocinaActuales, pedido]);
  }

  terminarCoccion(pedido: Pedido) {
    const pedidosEnCocinaActuales = this.pedidosEnCocina.value;
    const pedidosListosActuales = this.pedidosListos.value;
    this.pedidosEnCocina.next(pedidosEnCocinaActuales.filter(p => p.number !== pedido.number));
    this.pedidosListos.next([...pedidosListosActuales, pedido]);
  }

  entregarPedido(pedido: Pedido) {
    const pedidosListosActuales = this.pedidosListos.value;
    this.pedidosListos.next(pedidosListosActuales.filter(p => p.number !== pedido.number));
  }
}
