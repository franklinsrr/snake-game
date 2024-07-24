import { IBoard } from "@/interfaces/board";
import { Board } from "@/board/board";
import { Control } from "./control";
import { Collision } from "./collision";
import { Movement } from "./movement";
import { Food } from "@/food/food";
import { Snake } from "@/snake/snake.ts";


export class Game {
    private Frames: number = 150;
    private board: IBoard;

    constructor(board: IBoard = new Board()) {
        this.board = board;
    }

    render(app: HTMLDivElement | null) {
        if (!app) {
            throw new Error("there is not app id in the html file");
        }

        const movement = new Movement();
        const food = new Food();
        const snake = new Snake();

        const stop = setInterval(() => {
            app.innerHTML = "";
            const controls = new Control();
            const collision = new Collision();
            controls.controller(snake.getDirection(), snake.getSnakePosition(), (direction) => {
                snake.setDirection(direction);
            });

            const isCollision = collision.detectCollision(snake.getSnakePosition(), snake.getDirection());
            const isFoodCollision = collision.dectectFoodCollision(snake.getSnakePosition(), food.getFood().currentStatePosition);

            if (isFoodCollision) {
                food.lessFood();
                food.getNewFood();
            }

            if (isCollision || food.getFood().amount <= 0) {
                this.board.renderBoard(app, snake.getPrevSnakePosition(), food);
                clearInterval(stop);
            } else {
                const { move, newDirection } = movement.init(snake.getSnakePosition(), snake.getDirection());
                snake.move(move, newDirection);

                this.board.renderBoard(app, snake.getSnakePosition(), food);
            }

            snake.reconciliation();
        }, this.Frames)
    }
}