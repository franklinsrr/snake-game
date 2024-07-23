import { Square } from "@/board/Square";
import { ISnake } from "@/interfaces/snake";
import { ISquare } from "@/interfaces/square";

export class Snake implements ISnake {
    square: Square;

    constructor(square: ISquare = new Square()) {
        this.square = square;
    }

    renderSnake(state: number, currentSquare: number) {

        let squareElement;

        if (state == currentSquare) {
            squareElement = this.square.renderSquare(1);

        } else {
            squareElement = this.square.renderSquare(0);
        }

        return squareElement;
    }
}