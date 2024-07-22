import './style.css'
import { Game } from './game/game';

const app = document.querySelector<HTMLDivElement>('#app');

const game = new Game();

game.render(app);

