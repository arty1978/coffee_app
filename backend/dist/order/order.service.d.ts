import { ClientProxy } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { Order } from 'src/models/order.schema';
export declare class OrderService {
    private readonly coffeeOrderModel;
    private client;
    constructor(coffeeOrderModel: Model<Order>, client: ClientProxy);
    create(createCoffeOrder: Order): Promise<Order>;
    findAll(): Promise<Order[]>;
}
