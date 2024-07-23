import { Square } from "@/board/Square";
import { IState } from "@/interfaces/game";
import { ISnake } from "@/interfaces/snake";
import { ISquare } from "@/interfaces/square";

export class Snake implements ISnake {
    square: Square;

    constructor(square: ISquare = new Square()) {
        this.square = square;
    }

    renderSnake(state: IState, currentSquare: IState) {

        let squareElement;

        if (state.x == currentSquare.x && state.y === currentSquare.y) {
            squareElement = this.square.renderSquare(1);

        } else {
            squareElement = this.square.renderSquare(0);
        }

        return squareElement;
    }
}