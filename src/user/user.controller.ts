import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('user') //Decorator
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(@Body() data: Partial<User>) {
    console.log(data);
    return await this.userService.createUser(data);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getSingleUser(@Param('id') id: string) {
    return await this.userService.getSingleUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: Partial<User>) {
    const result = await this.userService.updateuser(id, data);
    return result;
  }

  @Patch(':id')
  async patchUser(@Param('id') id: string, @Body() data: Partial<User>) {
    const result = await this.userService.patchUser(id, data);
    return result;
  }
}
