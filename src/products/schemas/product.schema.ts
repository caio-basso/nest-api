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
  price: number;

  @Prop()
  quantity: number;

  @Prop([String])
  images: string[];

  @Prop({default: false})
  isFeatured: boolean;

  @Prop({default: Date.now})
  createdAt: Date;

  @Prop({default: Date.now})
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);