import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  //create-product
  @Post()
  async createproduct() {
    const result = await this.productService.createproduct();
    return result;
  }

  @Get('/get-products')
  async getProducts() {
    const result = await this.productService.getProducts();
    return result;
  }
  /* Auth Guard */
  @Get()
  @UseGuards(AuthGuard)
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }
}
