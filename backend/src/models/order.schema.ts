/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {

    @Prop()
    email: string;

    @Prop()
    orderTime: Date;

    @Prop()
    orderStatus: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

