import { IFoodState } from "./food";
import { ICords, IState } from "./game";
import { ISquare } from "./square";

export interface ISnake {
    square: ISquare;
    renderSnake(IState: IState, position: ICords, food: IFoodState): HTMLDivElement;
}