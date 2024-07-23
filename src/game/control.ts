export class Control {
    direction: string = "left";

    controller(direction: string, callback: (direction: string) => void) {
        document.addEventListener("keyup", (event) => {
            if (event.key === "w" && direction !== "up") {
                callback("up");

            } else if (event.key === "d" && direction !== "right") {
                callback("right");

            } else if (event.key === "a" && direction !== "left") {
                callback("left");

            } else if (event.key === "s" && direction !== "down") {
                callback("down");
            }
        });

    }
}