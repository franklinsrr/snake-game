import { IState } from "@/interfaces/game";

export class Movement {
    private steps: IState = { y: 1, x: 1 };

    init(state: IState, direction: string): [IState, string] {
        this.steps = state;

        if (direction === "up") {
            this.steps = { y: state.y - 1, x: state.x };

        } else if (direction === "right") {
            this.steps = { y: state.y, x: state.x + 1 };

        } else if (direction === "left") {
            this.steps = { y: state.y, x: state.x - 1 };

        } else if (direction === "down") {
            this.steps = { y: state.y + 1, x: state.x };
        } else {
            direction = "right"
            this.steps = { x: 1, y: 1 };
        }

        return [this.steps, direction];
    }
}