import { Injectable, } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Order, OrderDocument } from "./schemas/order.schema";
import { CreateOrderDto } from "./dto/create-order.dto";
import { User, UserDocument } from "../users/schemas/user.schema";

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    this.userModel.findOneAndUpdate({_id: createOrderDto.user } ,{$push: {"orders": createdOrder._id}});
    return createdOrder.save();
  }

  async getOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async getOrderById(id: string): Promise<Order> {
    return this.orderModel.findById(id);
  }

  async deleteOrderById(id: string): Promise<string> {
    await this.orderModel.deleteOne({ _id: id })
    return "Deleted";
  }
}
