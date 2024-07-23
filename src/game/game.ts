import { IBoard } from "@/interfaces/board";
import { IState } from "@/interfaces/game";
import { Board } from "@/board/board";
import { Control } from "./control";
import { Collision } from "./collision";
import { Movement } from "./movement";


export class Game {
    private Frames: number = 800;
    board: IBoard;
    state: IState = { x: 0, y: 0 };
    direction: string = "";

    constructor(board: IBoard = new Board()) {
        this.board = board;
    }

    render(app: HTMLDivElement | null) {
        if (!app) {
            throw new Error("there is not app id in the html file");
        }

        const movement = new Movement();

        const stop = setInterval(() => {
            app.innerHTML = "";
            const controls = new Control();
            const collision = new Collision();

            controls.controller(this.direction, this.state, (direction) => {
                this.direction = direction;
            });

            const isCollision = collision.detectCollision(this.state, this.direction);

            if (isCollision) {
                console.log("collision detected");
                clearInterval(stop);
            } else {

                const [newState, newDirection] = movement.init(this.state, this.direction);
                this.direction = newDirection;
                this.state = newState;

            }

            console.log("state: ", this.state);

            this.board.renderBoard(app, this.state);

        }, this.Frames)
    }
}