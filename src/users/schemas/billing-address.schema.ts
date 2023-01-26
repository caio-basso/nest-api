import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BillingAddressDocument = HydratedDocument<BillingAddress>;

@Schema()
export class BillingAddress {
  @Prop()
  street: string;

  @Prop()
  number: number;

  @Prop()
  city: string

  @Prop()
  state: string
}

export const BillingAddressSchema = SchemaFactory.createForClass(BillingAddress);