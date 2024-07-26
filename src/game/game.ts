import { IBoard } from "@/interfaces/board";
import { Board } from "@/board/board";
import { Control } from "./control";
import { Collision } from "./collision";
import { Movement } from "./movement";
import { Food } from "@/food/food";
import { Snake } from "@/snake/snake.ts";


export class Game {
    private Frames: number = 100;
    private board: IBoard;
    private stop: number = 0;

    constructor(board: IBoard = new Board()) {
        this.board = board;
    }

    render(app: HTMLDivElement | null) {
        if (!app) {
            throw new Error("there is not app id in the html file");
        }

        let movement = new Movement();
        let food = new Food();
        let snake = new Snake();
        const title = document.querySelector("#title") as HTMLElement;

        this.stop = setInterval(() => {
            app.innerHTML = "";
            title.innerHTML = "";
            const controls = new Control();
            const collision = new Collision();

            controls.controller(snake.getDirection(), snake.getSnakePosition(), (direction) => {
                snake.setDirection(direction);
            });

            const isCollision = collision.detectCollision(snake.getSnakePosition(), snake.getDirection(), snake.getSnakeBody());
            const isFoodCollision = collision.dectectFoodCollision(snake.getSnakePosition(), food.getFood().currentStatePosition);

            if (isFoodCollision) {
                food.lessFood();
                food.getNewFood();
            }

            if (isCollision || food.getFood().amount <= 0) {
                this.board.renderBoard(app, snake.getSnakeBody(), food);
                if (!food.food.amount) {
                    title.innerHTML = "You win!"
                } else {
                    title.innerHTML = "You Lost!"
                }
                clearInterval(this.stop)
            } else {
                const { move, newDirection } = movement.init(snake.getSnakePosition(), snake.getDirection());
                snake.move(move, newDirection);

                this.board.renderBoard(app, snake.getSnakeBody(), food);
            }
            snake.reconciliation();
        }, this.Frames)

    }

    clean(app: HTMLDivElement | null) {
        if (!app) {
            throw new Error("there is not app id in the html file");
        }
        clearInterval(this.stop)
        app.innerHTML = "";
    }
}