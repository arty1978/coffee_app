/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/models/order.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly coffeeOrderModel: Model<Order>, @Inject('COFFEE_SERVICE') private client: ClientProxy) { }
    async create(createCoffeOrder: Order): Promise<Order> {
        console.log('Order being saved in MongoDB:', createCoffeOrder);
        const makeCoffee = new this.coffeeOrderModel(createCoffeOrder);
        this.client.emit('coffee_ordered', Order);
        return makeCoffee.save()
    }
    async findAll(): Promise<Order[]> {
        return this.coffeeOrderModel.find().exec();
    }
}
