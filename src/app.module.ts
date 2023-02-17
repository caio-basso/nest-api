import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://db:27017',
      {dbName: 'nest'}
    ),
    ProductsModule,
    OrdersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
