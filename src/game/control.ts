import { IState } from "@/interfaces/game";

export class Control {
    controller(direction: string, state: IState, callback: (direction: string, state: IState) => void) {

        if (direction === "init") {
            const newState = { x: 0, y: 0 };
            callback("right", newState);
        }

        document.addEventListener("keyup", (event) => {
            if (event.key === "w" && direction !== "up") {
                const newState = { x: state.x, y: state.y - 44 };
                callback("up", newState);

            } else if (event.key === "d" && direction !== "right") {
                const newState = { x: state.x + 1, y: state.y };
                callback("right", newState);

            } else if (event.key === "a" && direction !== "left") {
                const newState = { x: state.x - 1, y: state.y };
                callback("left", newState);

            } else if (event.key === "s" && direction !== "down") {
                const newState = { x: state.x, y: state.y + 44 };
                callback("down", newState);
            } else {
                const newState = { x: 0, y: 0 };
                callback("right", newState);
            }
        });

    }
}