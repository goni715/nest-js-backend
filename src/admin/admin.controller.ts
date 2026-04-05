import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(@Body() data: CreateAdminDto) {
    const result = await this.adminService.createAdmin(data);
    return result;
  }

  @Get('/get-all-admins')
  async getAllAdmins() {
    const result = await this.adminService.getAllAdmins();
    return result;
  }
}
