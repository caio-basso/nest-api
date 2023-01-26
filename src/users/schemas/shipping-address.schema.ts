import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ShippingAddressDocument = HydratedDocument<ShippingAddress>;

@Schema()
export class ShippingAddress {
  @Prop()
  street: string;

  @Prop()
  number: number;

  @Prop()
  city: string

  @Prop()
  state: string
}

export const ShippingAddressSchema = SchemaFactory.createForClass(ShippingAddress);