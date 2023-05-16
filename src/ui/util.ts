import {question} from "readline-sync";

export class Util {
    static inputPositiveNumber(text: string) {
        let n: number = 0;
        do {
            n = Number(question(`+ ${text}: `));
        } while (n <= 0);
        return n;
    }
    static inputString(text: string) {
        let s: string = "";
        do {
            s = question(`+ ${text}: `);
        } while (s == "");
        return s;
    }
}