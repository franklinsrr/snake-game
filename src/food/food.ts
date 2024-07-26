import { IFoodState } from "@/interfaces/food";

export class Food {
    food: IFoodState;

    constructor() {
        this.food = { currentStatePosition: { x: this.getRandom(), y: this.getRandom() }, amount: 6 };
    }

    getRandom() {
        return Math.floor(Math.random() * 44) + 1;
    }

    getNewFood() {
        this.food.currentStatePosition = { x: this.getRandom(), y: this.getRandom() };
        return this.food;
    }

    getFood() {
        return this.food;
    }

    lessFood() {
        this.food.amount -= 1;
    }
}