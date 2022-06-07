/**
 * Data type depicting player data surch as rank, points, etc...
 */
export interface PlayerData {
  
  /**
   * Rank of player
   */
  rank: number;
  
  /**
   * Points of player
   */
  points: number;
  
  /**
   * Weight of player
   */
  weight: number;
  
  /**
   * Height of player
   */
  height: number;

  /**
   * Age of player
   */
  age: number;

  /**
   * Last wins of player
   */
  last: number[];

}