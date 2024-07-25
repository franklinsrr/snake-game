import { ICords, } from "./game";
import { Food } from "@/food/food.ts";
import { INode } from "./snake";

export interface IBoard {
    table: ICords[][];
    renderBoard(app: HTMLDivElement | null, snakePosition: INode[], food: Food): void;

}