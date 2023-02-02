import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsNumber()
  price: number

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsString()
  images: []

  @IsBoolean()
  isFeatured: Boolean

  timestamps: true
}
