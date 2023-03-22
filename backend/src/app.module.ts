/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderService } from './order/order.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/coffeeApp'), OrderModule,
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
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService],
})
export class AppModule { }
