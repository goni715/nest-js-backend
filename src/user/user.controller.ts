import { Body, Controller, Post } from '@nestjs/common';
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
}
