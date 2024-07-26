import { ISquare } from "@/interfaces/square";

export class Square implements ISquare {
    squareElement: HTMLDivElement;

    constructor(width = "20px", height = "20px") {
        this.squareElement = document.createElement("div")

        this.squareElement.style.width = width;
        this.squareElement.style.height = height;
        this.squareElement.style.borderColor = "white";
        this.squareElement.style.boxSizing = "border-box";
        this.squareElement.style.transition = "0.2";
    }

    renderSquare(state: number) {
        if (state === 1) {
            this.squareElement.style.backgroundColor = "white";
        }

        if (state === 2) {
            this.squareElement.style.background = "#88D66C";
        }



        return this.squareElement;
    }
}