import { ShippingAddress } from "../schemas/shipping-address.schema";
import { BillingAddress } from "../schemas/billing-address.schema";

export class CreateUserDto {
  name: string;
  age: number;
  shippingAddress: ShippingAddress;
  billingAddress: BillingAddress;
}
