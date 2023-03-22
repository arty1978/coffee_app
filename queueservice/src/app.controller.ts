/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Order } from '../../backend/src/models/order.schema';

@Controller()
export class AppController {


  @EventPattern('coffee-created')
  async handleCoffeCreatedEvent(orderStatus: Record<string, unknown>) {
    console.log(orderStatus);
  }

  // @EventPattern('coffee-done')
  // async handleCoffeDoneEvent(orderStatus: Record<string, unknown>) {
  //   console.log(orderStatus, '!!!');
  // }

  @MessagePattern('coffee-created')
  async handleCoffeeDone(@Payload() order: Order) {

    // Log the order with the updated status
    console.log('Coffee done:', order);
  }

}