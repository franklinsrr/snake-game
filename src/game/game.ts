import { IBoard } from "@/interfaces/board";
import { IState } from "@/interfaces/game";
import { Board } from "@/board/board";
import { Control } from "./control";
import { Collision } from "./collision";
import { Movement } from "./movement";
import { Food } from "@/food/food";


export class Game {
    private Frames: number = 150;
    private board: IBoard;
    direction: string = "";
    private state: IState = {
        currentStatePosition: { x: 0, y: 0 },
        food: {
            currentStatePosition: {
                x: 0, y: 0
            },
            amount: 0
        }
    };
    private prevState: IState = {
        currentStatePosition: { x: 0, y: 0 },
        food: {
            currentStatePosition: {
                x: 0, y: 0
            },
            amount: 0
        }
    };

    constructor(board: IBoard = new Board()) {
        this.board = board;
    }

    render(app: HTMLDivElement | null) {
        if (!app) {
            throw new Error("there is not app id in the html file");
        }

        const movement = new Movement();
        const food = new Food();

        const stop = setInterval(() => {
            app.innerHTML = "";
            const controls = new Control();
            const collision = new Collision();

            controls.controller(this.direction, this.state.currentStatePosition, (direction) => {
                this.direction = direction;
            });

            const isCollision = collision.detectCollision(this.state.currentStatePosition, this.direction);

            if (isCollision) {
                console.log("collision detected");
                this.board.renderBoard(app, this.prevState, food.getFood());
                clearInterval(stop);
            } else {
                const [newState, newDirection] = movement.init(this.state.currentStatePosition, this.direction);
                this.direction = newDirection;
                this.state.currentStatePosition = newState;
                this.board.renderBoard(app, this.state, food.getFood());
            }
            console.log("state: ", this.state);
            this.prevState = this.state;
        }, this.Frames)
    }
}