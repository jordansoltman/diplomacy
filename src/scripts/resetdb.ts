import { migrate } from './migrate';
import { seed } from './seed';

(async () => {
    console.log('STARTING RESET');
    await migrate();
    await seed();
})();
