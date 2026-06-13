import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({default : false})
  is_email_activated! : boolean

  @Prop({ required: true, unique: true })
  username?: string;

  @Prop()
  profession?: string;

  @Prop()
  bio?: string;

  @Prop({ default: 0 })
  points!: number;

  @Prop()
  avatar?: string;

  @Prop()
  profile_settings_id!: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User)
export type UserDocument = User & Document;