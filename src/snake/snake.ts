import { Square } from "@/board/Square";
import { ICords } from "@/interfaces/game";
import { ISnake } from "@/interfaces/snake";
import { ISquare } from "@/interfaces/square";
import { TDirections } from "@interfaces/controls.ts";

export class Snake implements ISnake {
    square: ISquare;
    direction: TDirections;
    snakeState: ICords;
    prevSnakeState: ICords;

    constructor(square: ISquare = new Square()) {
        this.square = square;
        this.direction = "INIT";
        this.snakeState = { x: 1, y: 1 };
        this.prevSnakeState = { x: 1, y: 1 };
    }

    getSnakePosition(): ICords {
        return this.snakeState;
    }

    getPrevSnakePosition(): ICords {
        return this.prevSnakeState;
    }

    getDirection(): TDirections {
        return this.direction;
    }

    setDirection(direction: TDirections) {
        this.direction = direction;
    }

    move(cords: ICords, direction: TDirections) {
        this.snakeState = cords;
        this.direction = direction;
    }

    reconciliation() {
        this.prevSnakeState = this.snakeState;
    }

}