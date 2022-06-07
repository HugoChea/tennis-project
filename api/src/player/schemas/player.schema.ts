import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Country } from './country.schema';
import { PlayerData } from './player-data.schema';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @Prop()
  id: number;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  shortname: string;

  @Prop()
  sex: string;

  @Prop()
  picture: string;

  @Prop()
  country: Country;

  @Prop()
  data: PlayerData;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
