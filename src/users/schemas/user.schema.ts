import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ShippingAddress } from "./shipping-address.schema";
import { BillingAddress } from "./billing-address.schema";
import { Order } from "../../orders/schemas/order.schema";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({default: Date.now})
  createdAt: Date;

  @Prop({default: Date.now})
  updatedAt: Date;

  @Prop()
  shippingAddress: [ShippingAddress];

  @Prop()
  billingAddress: [BillingAddress];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
  orders: Order[];
}

export const UserSchema = SchemaFactory.createForClass(User);