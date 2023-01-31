import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://db:27017',
      {dbName: 'nest'}
    ),
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
