import { IState } from "@/interfaces/game";

export class Collision {
    private isCollision = false;
    private topSides: IState[] = Array.from({ length: 44 }, (_, i) => ({ x: (i + 1), y: 1 }));
    private bottomSides: IState[] = Array.from({ length: 44 }, (_, i) => ({ x: (i + 1), y: 44 }));
    private rightSides: IState[] = Array.from({ length: 44 }, (_, i) => ({ x: 44, y: i + 1 }));
    private leftSides: IState[] = Array.from({ length: 44 }, (_, i) => ({ x: 1, y: i + 1 }));

    validate(position: IState, sides: IState[]) {

        return !!sides.find((side) => side.x === position.x && side.y === position.y);
    }

    detectCollision(position: IState, direction: string) {
        console.log("direction: ", direction);

        if (this.validate(position, this.rightSides) && direction === "right") {
            this.isCollision = true;
        } else if (this.validate(position, this.topSides) && direction === "up") {
            this.isCollision = true;
        } else if (this.validate(position, this.leftSides) && direction === "left") {
            this.isCollision = true;
        } else if (this.validate(position, this.bottomSides) && direction === "down") {
            this.isCollision = true;
        }

        return this.isCollision;
    }
}