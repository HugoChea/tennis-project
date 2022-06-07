import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('players')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  /**
   * Call service to retrieve all players by rank
   * @returns
   */
  @Get()
  findAll() {
    try {
      return this.playerService.findAll();
    } catch (e) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Call service to retrieve one player by id
   * @param id
   * @returns
   */
  @Get('/details/:id')
  findOne(@Param('id') id: string) {
    try {
      return this.playerService.findOne(+id);
    } catch (e) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Retrieve stats like average bmi, median height and country with best winrate
   * @returns
   */
  @Get('/get-stats')
  getStats() {
    try {
      return this.playerService.getStats();
    } catch (e) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
