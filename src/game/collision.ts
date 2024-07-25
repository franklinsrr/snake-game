import { DIRECTIONS } from "@/constants";
import { ICords } from "@/interfaces/game";
import { INode } from "@/interfaces/snake";

export class Collision {
    private isCollision = false;
    private topSides: ICords[] = Array.from({ length: 44 }, (_, i) => ({ x: (i + 1), y: 1 }));
    private bottomSides: ICords[] = Array.from({ length: 44 }, (_, i) => ({ x: (i + 1), y: 44 }));
    private rightSides: ICords[] = Array.from({ length: 44 }, (_, i) => ({ x: 44, y: i + 1 }));
    private leftSides: ICords[] = Array.from({ length: 44 }, (_, i) => ({ x: 1, y: i + 1 }));

    validate(position: ICords, sides: ICords[]) {
        return !!sides.find((side) => side.x === position.x && side.y === position.y);
    }

    validateBodyCollision(body: INode[], head: INode) {

        let [_, ...removeHead] = body;
        const isColl = removeHead.find((dot, i) => {
            const x = dot.data.cords.x === head.data.cords.x;
            const y = dot.data.cords.y === head.data.cords.y;
            const isColl = y && x;

            if (isColl && i < 10) {
                return true;
            }
        })

        if (isColl) {
            return true;
        }

        return false;
    }

    detectCollision(position: ICords, direction: string, snakeBody: INode[]) {
        if (this.validate(position, this.rightSides) && direction === DIRECTIONS.RIGHT) {
            this.isCollision = true;
        } else if (this.validate(position, this.topSides) && direction === DIRECTIONS.UP) {
            this.isCollision = true;
        } else if (this.validate(position, this.leftSides) && direction === DIRECTIONS.LEFT) {
            this.isCollision = true;
        } else if (this.validate(position, this.bottomSides) && direction === DIRECTIONS.DOWN) {
            this.isCollision = true;
        }

        if (this.validateBodyCollision(snakeBody, snakeBody[0])) {
            this.isCollision = true;
        }
        return this.isCollision;
    }

    dectectFoodCollision(foodPosition: ICords, currentSnakePosition: ICords) {
        return foodPosition.x === currentSnakePosition.x && foodPosition.y === currentSnakePosition.y;
    }
}