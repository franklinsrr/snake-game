import { IFoodState } from "@/interfaces/food";

export class Food {
    food: IFoodState;

    constructor() {
        this.food = { currentStatePosition: { x: this.getRandom(), y: this.getRandom() }, amount: 1 };
    }

    getRandom() {
        return Math.floor(Math.random() * 44) + 1;
    }

    getFood() {
        return this.food;
    }
}