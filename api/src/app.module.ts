import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';

const uri =
  process.env.MONGO_URI ||
  'mongodb://root:root@localhost:27017/tennisPlayersDB';

@Module({
  imports: [MongooseModule.forRoot(uri), PlayerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
