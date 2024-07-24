import {ICords, } from "./game";
import {Food} from "@/food/food.ts";

export interface IBoard {
    table: ICords[][];
    renderBoard(app: HTMLDivElement | null, snakePosition: ICords, food: Food): void;

}