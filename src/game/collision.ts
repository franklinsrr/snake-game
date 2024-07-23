export class Collision {
    private isCollision = false;
    private rightSides: number[] = Array.from({ length: 43 }, (_, i) => (i + 1) * 42);
    private topSides: number[] = Array.from({ length: 43 }, (_, i) => (i - 1) + 1);
    private leftSides: number[] = Array.from({ length: 43 }, (_, i) => (i + 1) * 43);
    private bottomSides: number[] = Array.from({ length: 43 }, (_, i) => (i * 1892) + 1);

    detectCollision(position: number, direction: string) {
        console.log("leftSides: ", this.leftSides);
        console.log("direction: ", direction);


        if (this.rightSides.includes(position) && direction === "right") {
            this.isCollision = true;
        } else if (this.topSides.includes(position) && direction === "top") {
            this.isCollision = true;
        } else if (this.leftSides.includes(position) && direction === "left") {
            this.isCollision = true;
        } else if (this.bottomSides.includes(position) && direction === "down") {
            this.isCollision = true;
        }



        return this.isCollision;
    }
}