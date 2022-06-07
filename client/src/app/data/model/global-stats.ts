/**
 * Data type depicting global stats
 */
 export interface GlobalStats {

    /**
     * Country code of highest win rate (eg : France => FR)
     */
     countryHighestWinrate: string;

    /**
     * Average BMI
     */
    averageIMC: number;

    /**
     * Median height of all players
     */
    medianHeight: number;

}