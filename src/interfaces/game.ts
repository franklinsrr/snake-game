import { IFoodState } from "./food";

export interface IState {
    currentStatePosition: ICords,
    food: IFoodState
}

export interface ICords {
    x: number;
    y: number;
}