import './style.css'
import { Game } from './game/game';

const app = document.querySelector<HTMLDivElement>('#app');


const game = new Game();




document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        game.clean(app);
        game.render(app);
    }
});
