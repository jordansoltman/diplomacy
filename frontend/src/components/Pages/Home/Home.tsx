import React from 'react';
import './Home.scss';
import GameListItem from './GameListItem';
import { GameListData, GameTurnState } from '../../../types';

const DATA: GameListData[] = [
    {
        id: '',
        name: 'Romp for the seas',
        numPlayers: 3,
        size: 9,
        turnNumber: 3,
        winCondition: 14,
        messages: 9,
        unread: true,
        ownStatus: GameTurnState.COMMITTED,
        nextTurn: 149383,
        players: [
            {
                name: 'Tyler',
                state: GameTurnState.COMMITTED
            },
            {
                name: 'Revor',
                state: GameTurnState.NO_ORDERS
            },
            {
                name: 'Jordan',
                state: GameTurnState.SAVED
            }
        ]
    },
    {
        id: '',
        name: 'Battle of ages',
        numPlayers: 7,
        size: 7,
        turnNumber: 3,
        winCondition: 14,
        messages: 3,
        unread: true,
        ownStatus: GameTurnState.COMMITTED,
        nextTurn: 149383,
        players: [
            {
                name: 'Tyler',
                state: GameTurnState.COMMITTED
            },
            {
                name: 'Tman',
                state: GameTurnState.NO_ORDERS
            },
            {
                name: 'Twinkle',
                state: GameTurnState.NO_ORDERS
            },
            {
                name: 'GreatGamer',
                state: GameTurnState.COMMITTED
            },
            {
                name: 'BradRoper6969',
                state: GameTurnState.SAVED
            },
            {
                name: 'ThickRopes',
                state: GameTurnState.COMMITTED
            },
            {
                name: 'J-Solts',
                state: GameTurnState.SAVED
            }
        ]
    },
    {
        id: '',
        name: 'Fight for the south',
        numPlayers: 2,
        size: 7,
        turnNumber: 3,
        winCondition: 14,
        messages: 1,
        unread: false,
        ownStatus: GameTurnState.COMMITTED,
        nextTurn: 149383,
        players: [
            {
                name: 'Tyler',
                state: GameTurnState.COMMITTED
            },
            {
                name: 'Jordan',
                state: GameTurnState.SAVED
            }
        ]
    },
    {
        id: '1',
        name: 'Fight for the west',
        numPlayers: 4,
        size: 7,
        turnNumber: 3,
        winCondition: 14,
        messages: 25,
        unread: true,
        ownStatus: GameTurnState.COMMITTED,
        nextTurn: 149383,
        players: [
            {
                name: 'Tyler',
                state: GameTurnState.COMMITTED
            },
            {
                name: 'Eve',
                state: GameTurnState.SAVED
            },
            {
                name: 'Madelyn',
                state: GameTurnState.COMMITTED
            },
            {
                name: 'Jordan',
                state: GameTurnState.SAVED
            }
        ]
    }
];

const Home = () => {
    return (
        <div className="Home">
            <ul className="game-list">
                {DATA.map((game) => {
                    return <GameListItem game={game} />;
                })}
            </ul>
        </div>
    );
};

export default Home;
