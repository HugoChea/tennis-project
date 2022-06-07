import { Country } from "./country";
import { PlayerData } from "./player-data";

/**
 * Data type depicting a tennis player
 */
export interface TennisPlayer {

    /**
     * Id of player
     */
    id: number;

    /**
     * First name of player
     * eg: Rafael
     */
    firstname: string;

    /**
     * Last name of player
     * eg: Nadal
     */
    lastname: string;

    /**
     * Shortname of player
     */
    shortname: string;

    /**
     * Sex of player (M or F)
     */
    sex: string;

    /**
     * URL link of player
     */
    picture: string;

    /**
     * Object containing : country code and country picture
     */
    country: Country;

    /**
     * Object containing various data such as rank, points, etc...
     */
    data: PlayerData;

}