import { IBoard } from "../interface/game";
import { Board } from "./board";


export class Game {
    private renderTime: number = 2000;
    private test: number = 0
    board: IBoard;
    constructor(board: IBoard = new Board()) {
        this.board = board;
    }

    render(app: HTMLDivElement | null) {
        if (!app) {
            throw new Error("there is not app id in the html file");
        }

        setInterval(() => {
            this.board.renderBoard();
            app.innerHTML = `
                <span style="color: white; font-size: 100px; display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw">this is just a test ${this.test += 1}</span>
            `
        }, this.renderTime)
    }
}