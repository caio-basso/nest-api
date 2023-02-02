import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {
  }

  @Get()
  getOrders() {
    return this.ordersService.getOrders();
  }

  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(id);
  }

  @Post('create')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Delete('delete/:id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.deleteOrderById(id)
  }
}
