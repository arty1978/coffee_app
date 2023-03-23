import { Order } from '../models/order.schema';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(orderData: Order): Promise<Order>;
    findAll(): Promise<Order[]>;
}
