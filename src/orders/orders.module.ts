import { forwardRef, Module } from "@nestjs/common";
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "./schemas/order.schema";
import { UsersModule } from "../users/users.module";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    forwardRef(() => UsersModule)
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService, MongooseModule]
})
export class OrdersModule {}
