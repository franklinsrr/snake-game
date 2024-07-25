import { ICords } from "@/interfaces/game";
import { Square } from "@board/Square.ts";
import { Food } from "@/food/food.ts";
import { IBoard } from "@interfaces/board.ts";
import { INode } from "@/interfaces/snake";

export class Board implements IBoard {
    table: ICords[][];


    constructor() {
        this.table = Array.from({ length: 44 }, (_, y) => Array.from({ length: 44 }, (_, x) => ({ y: (y + 1), x: (x + 1) })));
    }

    render(snakePosition: INode[], food: Food, currentSquare: ICords) {
        const square = new Square();
        const foodPosition = food.getFood().currentStatePosition;
        const foodAmount = food.getFood().amount;
        let squareElement;

        if (snakePosition.find((dot) => currentSquare.x === dot.data.cords.x && dot.data.cords.y === currentSquare.y)) {
            squareElement = square.renderSquare(1);
        } else {
            squareElement = square.renderSquare(0);
        }

        if (foodPosition.x === currentSquare.x && foodPosition.y === currentSquare.y && foodAmount > 0) {
            squareElement = square.renderSquare(2);
        }


        return squareElement;
    }

    renderBoard(app: HTMLDivElement | null, snakePosition: INode[], food: Food) {
        for (const positions of this.table) {
            positions.forEach((square) => {
                const squareElement = this.render(snakePosition, food, square)
                app?.appendChild(squareElement);
            })
        }
    }
}