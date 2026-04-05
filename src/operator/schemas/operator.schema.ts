import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Profile } from './profile.schema';

@Schema({ timestamps: true, versionKey: false })
export class Operator extends Document {
  @Prop()
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Profile' })
  profile: Profile;
}

export const OperatorSchema = SchemaFactory.createForClass(Operator);
