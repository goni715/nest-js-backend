import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Developer extends Document {
  @Prop()
  name: string;

  @Prop({ type: [Types.ObjectId], ref: 'Project' })
  projects: Types.ObjectId[];
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);
