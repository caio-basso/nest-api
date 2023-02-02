import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://db:27017',
      {dbName: 'nest'}
    ),
    ProductsModule,
    OrdersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
