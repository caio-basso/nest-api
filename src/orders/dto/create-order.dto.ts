import { IsNotEmpty, IsString } from "class-validator";
import { User } from "../../users/schemas/user.schema";
import { Product } from "../../products/schemas/product.schema";

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  user: User;

  products: Product;
}