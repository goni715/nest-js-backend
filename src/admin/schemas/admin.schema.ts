import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from './address.schema';

@Schema({ timestamps: true, versionKey: false })
export class Admin extends Document {
  @Prop()
  name: string;

  //@Prop({ type: AddressSchema })
  //address: Address;
  @Prop({ type: Address })
  address: Address;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
