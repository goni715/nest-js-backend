import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  //create-Product
  async createproduct(): Promise<Product> {
    const product = new this.productModel({
      title: 'Gaming Laptop',
      tags: [{ name: 'Electronics' }, { name: 'Gaming' }, { name: 'Laptop' }],
    });

    return await product.save();
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  private products = [
    { id: 1, name: 'pen' },
    { id: 2, name: 'book' },
    { id: 3, name: 'fan' },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((cv) => cv.id === id);
  }
}
