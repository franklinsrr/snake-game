import { ICords } from "@/interfaces/game";

export class Movement {
    private steps: ICords = { y: 1, x: 1 };

    init(statePosition: ICords, direction: string): [ICords, string] {
        this.steps = statePosition;

        if (direction === "up") {
            this.steps = { y: statePosition.y - 1, x: statePosition.x };

        } else if (direction === "right") {
            this.steps = { y: statePosition.y, x: statePosition.x + 1 };

        } else if (direction === "left") {
            this.steps = { y: statePosition.y, x: statePosition.x - 1 };

        } else if (direction === "down") {
            this.steps = { y: statePosition.y + 1, x: statePosition.x };
        } else {
            direction = "right"
            this.steps = { x: 1, y: 1 };
        }

        return [this.steps, direction];
    }
}