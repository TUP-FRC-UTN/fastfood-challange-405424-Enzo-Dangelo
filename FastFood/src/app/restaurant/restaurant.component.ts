import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { POSComponent } from '../pos/pos.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, POSComponent, KitchenComponent, DeliveryPointComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  pedidosIngresados$;
  
  constructor(private pedidoService: PedidoService) {
    this.pedidosIngresados$ = this.pedidoService.getPedidosIngresados();
  }
}
