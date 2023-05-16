import { Util } from "../ui/util";

export abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    input(): void {
        this.name = Util.inputString("Nhap ten");
    }
    output(): void {
        console.log("- Name: " + this.name);
    }
    abstract getArea(): number;
}