/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsInt, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;
}