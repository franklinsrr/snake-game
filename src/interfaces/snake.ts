import { IState } from "./game";
import { ISquare } from "./square";

export interface ISnake {
    square: ISquare;
    renderSnake(IState: IState, position: IState): HTMLDivElement;
}