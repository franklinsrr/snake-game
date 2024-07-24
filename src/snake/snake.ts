import { Square } from "@/board/Square";
import { IFoodState } from "@/interfaces/food";
import { ICords, IState } from "@/interfaces/game";
import { ISnake } from "@/interfaces/snake";
import { ISquare } from "@/interfaces/square";

export class Snake implements ISnake {
    square: ISquare;

    constructor(square: ISquare = new Square()) {
        this.square = square;
    }

    renderSnake(state: IState, currentSquare: ICords, food: IFoodState) {

        let squareElement;
        const { currentStatePosition: StatePosition } = state;
        const { currentStatePosition: FoodPosition } = food;

        if (StatePosition.x == currentSquare.x && StatePosition.y === currentSquare.y) {
            squareElement = this.square.renderSquare(1);

        } else {
            squareElement = this.square.renderSquare(0);
        }

        if (FoodPosition.x === currentSquare.x && FoodPosition.y === currentSquare.y) {
            squareElement = this.square.renderSquare(2);

        }

        return squareElement;
    }
}