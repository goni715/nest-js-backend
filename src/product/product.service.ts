/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    private products = [
        { id:1, name: 'pen'},
        { id:2, name: 'book'},
        { id:3, name: 'fan'},
    ]

    getAllProducts(){
        return this.products;
    }

    getProductById(id:number){
        return this.products.find((cv)=> cv.id===id);
    }
}
