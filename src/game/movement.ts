import { ICords } from "@/interfaces/game";
import { TDirections } from "@interfaces/controls.ts";
import { DIRECTIONS } from "@/constants";

export class Movement {
    private direction: TDirections = "INIT" as TDirections;
    private steps: ICords = { y: 1, x: 1 };

    init(statePosition: ICords, direction: TDirections) {

        if (direction === DIRECTIONS.UP) {
            this.steps = { y: statePosition.y - 1, x: statePosition.x };
            this.direction = DIRECTIONS.UP as TDirections

        } else if (direction === DIRECTIONS.RIGHT) {
            this.steps = { y: statePosition.y, x: statePosition.x + 1 };
            this.direction = DIRECTIONS.RIGHT as TDirections

        } else if (direction === DIRECTIONS.LEFT) {
            this.steps = { y: statePosition.y, x: statePosition.x - 1 };
            this.direction = DIRECTIONS.LEFT as TDirections

        } else if (direction === DIRECTIONS.DOWN) {
            this.steps = { y: statePosition.y + 1, x: statePosition.x };
            this.direction = DIRECTIONS.DOWN as TDirections
        } else {
            this.direction = DIRECTIONS.RIGHT as TDirections
            this.steps = { x: 1, y: 1 };
        }

        return { move: this.steps, newDirection: this.direction as TDirections };
    }
}