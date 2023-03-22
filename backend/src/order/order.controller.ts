/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from '@nestjs/common';
import { Order } from 'src/models/order.schema';
import { OrderService } from './order.service';


@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }
    @Post()
    async create(@Body() orderData: Order): Promise<Order> {
        console.log(Order);

        const order = new Order();
        order.email = orderData.email;
        order.orderTime = orderData.orderTime;
        order.orderStatus = orderData.orderStatus;
        console.log(order, '@@@');

        return this.orderService.create(order);
    }

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.findAll()
    }
}