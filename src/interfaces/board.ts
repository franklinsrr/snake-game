import { IFoodState } from "./food";
import { IState } from "./game";

export interface IBoard {
    renderBoard(app: HTMLDivElement | null, state: IState, food: IFoodState): void;

}