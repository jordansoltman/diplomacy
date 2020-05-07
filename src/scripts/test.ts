/* eslint-disable @typescript-eslint/camelcase */
import db from '../db';

(async function (): Promise<void> {
    // await db.models.game.insert({
    //     name: 'RANDOM GAME',
    //     interval_minutes: 3,
    //     password: '1248',
    //     win_condition: 18,
    //     num_players: 7
    // });
    await db.models.user.insert([
        // { username: 'tylersayvetz', password: 'roadrat', email: 'tylersayvetz@gmail.com' },
        // { username: 'jordansoltman', password: '1247133812', email: 'me@jordansoltman.com' },
        // { username: 'pete', password: '1247133812', email: 'pete@pete.com' },
        // { username: 'mete', password: '1247133812', email: 'pete@mete.com' }
    ]);
    // await db.models.game_has_player.insert([
    //     {
    //         player: 'tylersayvetz',
    //         game_id: 2
    //     },
    //     {
    //         player: 'jordansoltman',
    //         game_id: 2
    //     }
    // ]);
    const users = await db.models.game.findAll({
        log: true,
        include: {
            association: 'game_players'
        }
    });

    console.log(JSON.stringify(users));
})();
