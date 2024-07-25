import { ICords } from "./game";
import { ISquare } from "./square";
import { TDirections } from "@interfaces/controls.ts";

export interface ISnake {
    readonly square: ISquare;
    readonly direction: TDirections;
    readonly snakeState: ICords;
    readonly prevSnakeState: ICords;

    getSnakePosition(): ICords;
    getPrevSnakePosition(): ICords;
    getDirection(): TDirections;
    setDirection(direction: TDirections): void;
    move(cords: ICords, direction: TDirections): void;
    reconciliation(): void;
}

export interface IData {
    cords: ICords,
    direction: TDirections;
}

export interface INode {
    data: IData;
    next: INode | null;
}
