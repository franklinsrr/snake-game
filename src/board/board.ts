import { IBoard } from "@/interfaces/board";
import { Snake } from "@/snake/snake";

export class Board implements IBoard {

    renderBoard(app: HTMLDivElement | null, state: number) {
        let init = 0;

        const width = app?.style.width as unknown as number || 880;;
        const height = app?.style.height as unknown as number || 880;

        const squares = (width * height) / (20 * 20);

        while (init < squares) {
            const snake = new Snake();
            const squareElement = snake.renderSnake(state, init);
            app?.appendChild(squareElement);
            init++;
        }
    }
}