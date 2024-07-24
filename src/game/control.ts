import { ICords } from "@/interfaces/game";
import { DIRECTIONS, KEYS } from "@/constants";
import { TDirections } from "@interfaces/controls.ts";

export class Control {
    controller(direction: string, statePosition: ICords, callback: (direction: TDirections, cords: ICords) => void) {

        if (direction === DIRECTIONS.INIT) {
            const newState = { x: 1, y: 1 };
            callback(DIRECTIONS.RIGHT as TDirections, newState);
        }

        document.addEventListener("keyup", (event) => {
            if (event.key === KEYS.UP && direction !== DIRECTIONS.UP) {
                const newState = { x: statePosition.x, y: statePosition.y - 44 };
                callback(DIRECTIONS.UP as TDirections, newState);

            } else if (event.key === KEYS.RIGHT && direction !== DIRECTIONS.RIGHT) {
                const newState = { x: statePosition.x + 1, y: statePosition.y };
                callback(DIRECTIONS.RIGHT as TDirections, newState);

            } else if (event.key === KEYS.LEFT && direction !== DIRECTIONS.LEFT) {
                const newState = { x: statePosition.x - 1, y: statePosition.y };
                callback(DIRECTIONS.LEFT as TDirections, newState);

            } else if (event.key === KEYS.DOWN && direction !== DIRECTIONS.DOWN) {
                const newState = { x: statePosition.x, y: statePosition.y + 44 };
                callback(DIRECTIONS.DOWN as TDirections, newState);
            } else {
                const newState = { x: 1, y: 1 };
                callback(DIRECTIONS.RIGHT as TDirections, newState);
            }
        });

    }
}