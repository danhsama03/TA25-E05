import { Rectangle } from "./rectangle";
import { Util } from "../ui/util";

export class Square extends Rectangle {
    constructor(side: number = 1) {
        const s = side > 0 ? side : 1;
        super(s, s);
    }

    input(): void {
        this.width = Util.inputPositiveNumber("Nhap canh");
        this.height = this.width;
    }

    output(): void {
        console.log("Hinh vuong: " + this.width + " x " + this.height);
    }
}