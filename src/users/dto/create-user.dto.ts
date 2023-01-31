import { ShippingAddress } from '../schemas/shipping-address.schema';
import { BillingAddress } from '../schemas/billing-address.schema';
import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string

  timestamps: true

  shippingAddress: ShippingAddress;
  billingAddress: BillingAddress;
}
