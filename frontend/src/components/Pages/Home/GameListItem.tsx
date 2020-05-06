import React, { ReactElement, useState } from 'react';

import { GameListData } from '../../../types';
import { Redirect } from 'react-router-dom';

interface GameListItemProps {
    game: GameListData;
}

/**
 * @param param0 The game data object
 */

const GameListItem = ({ game }: GameListItemProps): ReactElement => {
    /**
     * This is the redirect route for changing the view to a specific game.
     * When not null, the component will render a Redirect
     * When null, the component renders the list item.
     */
    const [referrer, setRefferer] = useState<string | null>(null);
    const turnStatus = [
        {
            message: 'No Orders',
            color: '#e0e0e0',
            img: './no-orders.png'
        },
        {
            message: 'Orders Saved',
            color: '#ffe65a',
            img: './saved-orders.png'
        },
        {
            message: 'Ready',
            color: '#72E89D',
            img: './ready-orders.png'
        }
    ];

    const ownTurnStyle = {
        backgroundColor: turnStatus[game.ownStatus].color
    };

    function nextTurnTimeToString(time: number): string {
        //todo: Write time logic for encoding the time as a string describing time remaining.
        const minutes = time / 60000;

        return `${Math.floor(minutes / 60)}h ${Math.floor(minutes % 60)}m`;
    }

    function turnNumberToString(turnNum: number): string {
        console.log(turnNum);
        //todo: Write logic to convert turn rumber to turn phase.
        return 'Fall 1902';
    }

    function handleClick(): void {
        setRefferer(`/diplomacy/${game.id}`);
    }

    if (referrer !== null) {
        return <Redirect to={referrer} />;
    } else {
        return (
            <li className="game-item" onClick={handleClick}>
                <div className="own-turn-status" style={ownTurnStyle}>
                    {turnStatus[game.ownStatus].message}
                </div>
                <div className="game-data">
                    <div className="left-detail">
                        <div className="detail-title">
                            <p>{game.name}</p>
                            <p>{turnNumberToString(game.turnNumber)}</p>
                        </div>
                        <div className="player-states">
                            {game.players.map((player) => {
                                return <img src={turnStatus[player.state].img} />;
                            })}
                        </div>
                    </div>
                    <div className="right-detail">
                        <span>{nextTurnTimeToString(game.nextTurn)}</span>
                    </div>
                </div>
            </li>
        );
    }
};

export default GameListItem;
