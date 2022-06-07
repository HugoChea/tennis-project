import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Country {

  @Prop()
  code: string;

  @Prop()
  picture: string;

}