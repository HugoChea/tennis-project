import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class PlayerData {

  @Prop()
  rank: number;

  @Prop()
  points: number;

  @Prop()
  weight: number;

  @Prop()
  height: number;

  @Prop()
  age: number;

  @Prop()
  last: number[];

}