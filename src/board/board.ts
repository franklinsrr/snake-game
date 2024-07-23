import { IBoard } from "@/interfaces/board";
import { IState } from "@/interfaces/game";
import { Snake } from "@/snake/snake";

export class Board implements IBoard {
    private table: IState[][];

    constructor() {
        this.table = Array.from({ length: 44 }, (_, y) => Array.from({ length: 44 }, (_, x) => ({ y: (y + 1), x: (x + 1) })));
    }

    renderBoard(app: HTMLDivElement | null, state: IState) {

        for (const positions of this.table) {
            positions.forEach((square) => {
                const snake = new Snake();
                const squareElement = snake.renderSnake(state, square);
                app?.appendChild(squareElement);
            })
        }
    }
}