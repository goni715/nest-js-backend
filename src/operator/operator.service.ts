import { Injectable } from '@nestjs/common';
import { Operator } from './schemas/operator.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class OperatorService {
  constructor(
    @InjectModel(Operator.name) private operatorModel: Model<Operator>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async createOperator(): Promise<Operator> {
    const profile = await new this.profileModel({
      age: 20,
      qualification: 'Graduated',
    }).save();

    const operator = await new this.operatorModel({
      name: 'Goni',
      profile: profile?._id,
    }).save();

    return operator;
  }

  async getAllOperators(): Promise<Operator[]> {
    const operators = await this.operatorModel
      .find()
      .populate('profile')
      .exec();

    return operators;
  }
}
