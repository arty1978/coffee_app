/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Order } from '../../backend/src/models/order.schema';

@Controller()
export class AppController {


  //   @EventPattern('coffee_order_created')
  //   async handleCoffeeOrderCreated(order: Order) {
  //     console.log('Order created:', order);
  //   }

  @MessagePattern('coffee-created')
  async handleCoffeeOrderCreated(@Payload() order: Order) {

    console.log('Coffee done:', order);
  }
}

