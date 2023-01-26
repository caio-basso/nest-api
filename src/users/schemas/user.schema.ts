import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ShippingAddress } from "./shipping-address.schema";
import { BillingAddress } from "./billing-address.schema";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  shippingAddress: [ShippingAddress]

  @Prop()
  billingAddress: [BillingAddress]
}

export const UserSchema = SchemaFactory.createForClass(User);