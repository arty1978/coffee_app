/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from '@nestjs/common';
import { Order } from '../models/order.schema';
import { OrderService } from './order.service';



@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }
    @Post()
    async create(@Body() orderData: Order): Promise<Order> {
        console.log('Received order data:', orderData);
        const order = new Order();
        order.email = orderData.email;
        order.orderTime = new Date().getTime();
        order.orderStatus = 'ordered';

        return await this.orderService.create(order);
    }

    @Get()
    async findAll(): Promise<Order[]> {
        return await this.orderService.findAll()
    }
}
