import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsString()
  images: []

  @IsBoolean()
  isFeatured: Boolean

  timestamps: true
}
