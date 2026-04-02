import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(data: Partial<User>): Promise<User> {
    const newUser = new this.userModel(data);
    return await newUser.save();
  }

  async getUsers() {
    const result = await this.userModel.find().exec(); //exec used= when promise will be returned
    return result;
  }

  async getSingleUserById(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid Object ID');
    }
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateuser(id: string, data: Partial<User>) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid Object ID');
    }

    //const updatedUser = await this.userModel.findByIdAndUpdate(id, data, {
    // new: true,
    //});

    //recommend for PUT Api//PUT will replace the code completely
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      {
        name: data.name ?? null,
        age: data.age ?? null,
        email: data.email ?? null,
      },
      {
        overwrite: true,
        new: true,
      },
    );

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }

  async patchUser(id: string, data: Partial<User>) {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    return updatedUser;
  }

  async deleteUser(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    return deletedUser;
  }
}
