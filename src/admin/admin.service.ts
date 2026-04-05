import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './schemas/admin.schema';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async createAdmin(data: CreateAdminDto) {
    const admin = await this.adminModel.create(data);
    return admin;
  }

  async getAllAdmins() {
    const admins = await this.adminModel.find().sort('-createdAt');
    return admins;
  }
}
