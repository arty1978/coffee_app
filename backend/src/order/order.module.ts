/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderSchema } from 'src/models/order.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
        OrderModule,
    ClientsModule.register([{
        name: 'COFFEE_SERVICE',
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'coffee_queue',
            queueOptions: {
                durable: false
            }
        }
    }])
    ],
    controllers: [OrderController],
    providers: [OrderService],
    exports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])]
})
export class OrderModule { }
