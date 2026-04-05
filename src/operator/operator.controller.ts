import { Controller, Get, Post } from '@nestjs/common';
import { OperatorService } from './operator.service';

@Controller('operator')
export class OperatorController {
  constructor(private readonly operatorService: OperatorService) {}

  @Post()
  async createOperator() {
    const result = this.operatorService.createOperator();
    return result;
  }

  @Get()
  async getAllOperators() {
    const result = this.operatorService.getAllOperators();
    return result;
  }
}
