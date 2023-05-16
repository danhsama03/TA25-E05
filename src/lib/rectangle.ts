import {question} from "readline-sync"
import { Util } from "../ui/util";
import { Shape } from "./shape";

export class Rectangle extends Shape{
    protected width: number;
    protected height: number;

    constructor(width: number = 2, height: number = 1) {
        super("Hinh chu nhat")
        this.width = width > 0 ? width : 2;
        this.height = height > 0 ? height : 1;
    }

    input(): void {
        
        this.width = Util.inputPositiveNumber("Nhap chieu dai");
        this.height = Util.inputPositiveNumber("Nhap chieu rong");
    }

    output(): void {
        
        console.log("Hinh chu nhat: " + this.width + " X " + this.height);
    }

    getArea(): number {
        return this.width * this.height;
    }
}