import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './schemas/admin.schema';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(@Body() data: Admin) {
    const result = await this.adminService.createAdmin(data);
    return result;
  }
}
