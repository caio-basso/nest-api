import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  sku: string;

  @Prop()
  quantity: number;

  @Prop()
  images: [];

  @Prop({default: false})
  isFeatured: boolean

  @Prop({default: Date.now})
  createdAt: Date

  @Prop({default: Date.now})
  updatedAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);