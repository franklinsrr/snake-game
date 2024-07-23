import { ISquare } from "./square";

export interface ISnake {
    square: ISquare;
    renderSnake(state: number, position: number): HTMLDivElement;
}