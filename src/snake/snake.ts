import { Square } from "@/board/Square";
import { ICords } from "@/interfaces/game";
import { ISnake } from "@/interfaces/snake";
import { ISquare } from "@/interfaces/square";
import { TDirections } from "@interfaces/controls.ts";
import { Body } from "./body";

export class Snake implements ISnake {
    square: ISquare;
    direction: TDirections;
    snakeState: ICords;
    prevSnakeState: ICords;
    body;

    constructor(square: ISquare = new Square()) {
        this.square = square;
        this.direction = "INIT";
        this.snakeState = { x: 1, y: 1 };
        this.prevSnakeState = { x: 1, y: 1 };
        this.body = new Body();
        this.body.insertNode({ cords: { x: 1, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 2, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 3, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 4, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 5, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 6, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 7, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 8, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 9, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 10, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 11, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 12, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 13, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 14, y: 1 }, direction: "RIGHT" })
        this.body.insertNode({ cords: { x: 15, y: 1 }, direction: "RIGHT" })
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
        this.body.moveNodes({ cords, direction });
    }

    reconciliation() {
        this.prevSnakeState = this.snakeState;
    }

    getSnakeBody() {
        return this.body.getNodesList();
    }

}