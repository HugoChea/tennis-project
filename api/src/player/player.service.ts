import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatsResponseDto } from './dto/stats-response.dto';
import { Player, PlayerDocument } from './schemas/player.schema';

@Injectable()
export class PlayerService {

  constructor(@InjectModel(Player.name) private readonly playerModel: Model<PlayerDocument>) {

  }

  /**
   * Get all players sorted by rank, from the best to the bestless
   * @returns 
   */
  async findAll(): Promise<Player[]> {
    return this.playerModel.find().sort({ 'data.rank': 1 }).exec();
  }

  /**
   * Get one player data by id
   * @param id 
   * @returns 
   */
  async findOne(id: number): Promise<Player> {
    let result = await this.playerModel.findOne({ id: id }).exec();
    if (result){
      result.data.weight = this.convertGramToKilo(result.data.weight);
      result.data.height = this.convertCmToM(result.data.height);
      return result;
    }
    else{
      throw new HttpException(
        'Not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  /**
   * Get all players 
   * Sort them by height to ease finding median height
   * Calculate each players winrate to add it in a map with average winrate by country
   * Sum all Bmi to get average
   * @returns 
   */
  async getStats(): Promise<StatsResponseDto> {

    const stats: StatsResponseDto = new StatsResponseDto();
    let sumIMC = 0;
    const countryWinrateMap: Map<string, number> = new Map<string, number>()

    const players: Player[] = await this.playerModel.find();
    players.sort((a, b) => a.data.height - b.data.height)

    for (const player of players) {
      sumIMC += this.calculateIMC(this.convertCmToM(player.data.height), this.convertGramToKilo(player.data.weight));
      // this.calculateWinrate();
    }

    stats.medianHeight = this.calculateMedianHeight(players);
    stats.averageIMC = sumIMC / players.length;
    stats.countryHighestWinrate = '';
    return stats;
  }

  /**
   * Get an array of players and return the median height as follow :
   * Given an array [1, 2, 3, 4, 5] : 3 is the median value
   * Given an array [1, 2, 3, 4] : 2,5 is the median value
   * @param players 
   * @returns 
   */
  calculateMedianHeight(players: Player[]) {
    const half = Math.floor(players.length / 2);
    if (players.length % 2) {
      return players[half].data.height;
    }

    return (players[half - 1].data.height + players[half].data.height) / 2.0;
  }

  /**
   * Get a height and weight as param and return the calculated bmi as follow :
   * weight / height * height
   * It returns result rounded to one decimal
   * @param height 
   * @param weight 
   * @returns 
   */
  calculateIMC(height: number, weight: number) {
    if (height === 0){
      throw "Invalid value";
    }
    else{
      return Math.round((weight / (height * height)) * 10) / 10;
    }
  }

  /**
   * Get a weight in gram and convert it in kilogram
   * @param weight 
   * @returns
   */
  convertGramToKilo(weight: number): number {
    return weight / 1000;
  }

  /**
   * Get a height in cm and convert it in meter
   * @param height 
   * @returns 
   */
  convertCmToM(height: number): number {
    return height / 100;
  }

  calculateWinrate() {
    return 0;
  }

}
