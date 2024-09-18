import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PedidosService } from '../../Services/pedidos.service';

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})

export class PointOfSellComponent {

constructor(private pedidosService: PedidosService) { }

name: string = '';
description: string = '';

onSubmit() {
  this.pedidosService.crearPedido(this.name, this.description);
  this.name = '';
  this.description = '';
  }
}
