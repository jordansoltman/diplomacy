/**
 * The status of a given players' orders for a given turn.
 */
export enum GameTurnState {
    NO_ORDERS,
    SAVED,
    READY
}

/**
 * Player in a given game
 */
export interface GamePlayer {
    name: string;
    state: GameTurnState;
    //more data for the players here.
}

/**
 * The game data that the front end knows about.
 */
export interface GameListData {
    id: string;
    name: string;
    numPlayers: number;
    size: number;
    turnNumber: number;
    winCondition: number;
    messages: number;
    unread: boolean;
    nextTurn: number;
    players: GamePlayer[];
    ownStatus: GameTurnState;
}
