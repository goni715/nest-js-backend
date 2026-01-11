/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategories() {
    return ['Pokenmon', 'Footbal', 'BasketBall'];
  }
}
