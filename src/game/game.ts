import { IBoard } from "@/interfaces/board";
import { Board } from "@/board/board";
import { Control } from "./control";
import { Collision } from "./collision";

export class Game {
    private Frames: number = 800;
    board: IBoard;
    state: number = 0;
    direction: string = "";

    constructor(board: IBoard = new Board()) {
        this.board = board;
    }

    render(app: HTMLDivElement | null) {
        if (!app) {
            throw new Error("there is not app id in the html file");
        }

        const stop = setInterval(() => {
            app.innerHTML = "";
            const controls = new Control();
            const collision = new Collision();

            const isCollision = collision.detectCollision(this.state, this.direction);

            if (isCollision) {
                clearInterval(stop);
            }

            if (this.direction === "up") {
                this.state -= 44;
            } else if (this.direction === "right") {
                this.state += 1;
            } else if (this.direction === "left") {
                this.state -= 1;
            } else if (this.direction === "down") {
                this.state += 44;
            } else {
                this.direction = "right"
                this.state += 0;
            }

            console.log("state: ", this.state);

            controls.controller(this.direction, (direction) => {
                this.direction = direction;
            });

            this.board.renderBoard(app, this.state);

        }, this.Frames)
    }
}