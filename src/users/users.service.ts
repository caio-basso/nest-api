import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { Order, OrderDocument } from '../orders/schemas/order.schema';
import { Product, ProductDocument } from '../products/schemas/product.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUsersPopulated(): Promise<User[]> {
    return this.userModel
      .find()
      .populate({
        path: 'orders',
        populate: [
          {
            path: 'products',
            model: 'Product',
          },
        ],
      })
      .exec();
  }

  async getUserById(id: string): Promise<User> {
    return this.userModel.findById(id).populate({
      path: 'orders',
      populate: [
        {
          path: 'products',
          model: 'Product',
        },
      ],
    });
  }

  async updateUser(id: string, user: Partial<User>): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUserById(id: string) {
    const deleted = await this.userModel.deleteOne({ _id: id });
    return 'User deleted';
  }
}
