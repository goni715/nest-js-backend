import { Module } from '@nestjs/common';
import { OperatorController } from './operator.controller';
import { OperatorService } from './operator.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Operator, OperatorSchema } from './schemas/operator.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Operator.name, schema: OperatorSchema },
      { name: Profile.name, schema: ProfileSchema },
    ]),
  ],
  controllers: [OperatorController],
  providers: [OperatorService],
})
export class OperatorModule {}
