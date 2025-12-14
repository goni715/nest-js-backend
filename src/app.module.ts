import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductService, UserService],
})
export class AppModule {}
