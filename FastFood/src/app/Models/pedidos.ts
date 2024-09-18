export interface Pedidos {
    number: number; 
    name: string; 
    description: string;  
    date: Date;
    estado: 'pendienteDeCocinar' | 'cocinando' | 'cocinado' | 'entregado';
}
