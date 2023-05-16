import { question } from "readline-sync";
import chalk from "chalk";
import { Shape } from "../lib/shape";
import { Square } from "../lib/square";
import { Rectangle } from "../lib/rectangle";
import { Util } from "./util";

export class Program {
  private info = chalk.blueBright.bold;
  private danger = chalk.redBright.italic.bold;
  private success = chalk.greenBright.bold;

  // *** Test Rectangle
  private menu() {
    console.log(this.danger("============= E05 ============="));
    console.log("1. Rectangle: In chieu dai, chieu rong");
    console.log("2. Rectangle: Nhap chieu dai, chieu rong moi");
    console.log("3. Rectangle: In dien tich hinh chu nhat");
    console.log(this.info("=================================="));
    console.log("4. Rectangle voi Square ke thua: In canh");
    console.log("5. Rectangle voi Square ke thua: Nhap canh moi");
    console.log("6. Rectangle voi Square ke thua: In dien tich hinh vuong");
    console.log(this.info("=================================="));
    console.log("7. Shape voi Rectangle ke thua: In chieu dai, chieu rong");
    console.log(
      "8. Shape voi Rectangle ke thua: Nhap chieu dai, chieu rong moi"
    );
    console.log("9. Shape voi Rectangle ke thua: In dien tich hinh chu nhat");
    console.log(this.info("=================================="));
    console.log("10. Shape voi Square ke thua: In canh");
    console.log("11. Shape voi Square ke thua: Nhap canh moi");
    console.log("12. Shape voi Square ke thua: In dien tich hinh vuong");
    console.log(this.info("============= Menu ==============="));
  }

  public run() {
    let choice: number = 0;

    do {
      this.menu();
      choice = Number(
        question(
          this.info("Chon chuc nang (Hoac nhap so 0 de dung chuong trinh): ")
        )
      );
      console.clear();
      const r: Rectangle = new Rectangle(6, 3);
      const s: Square = new Square(-3);
      const shape: Shape = new Rectangle(6, 3);
      const shape2: Shape = new Square(6);
      switch (choice) {
        case 1:
          r.output();
          break;
        case 2:
          r.input();
          r.output();
          break;
        case 3:
          console.log("- Dien tich hinh chu nhat:", r.getArea());
          break;
        case 4:
          s.output();
          break;
        case 5:
          s.input();
          s.output();
          break;
        case 6:
          console.log("- Dien tich hinh vuong:", s.getArea());
          break;
        case 7:
          shape.output();
          break;
        case 8:
          shape.input();
          shape.output();
          break;
        case 9:
          console.log("- Dien tich hinh chu nhat:", shape.getArea());
          break;
        case 10:
          shape2.output();
          break;
        case 11:
          shape2.input();
          shape2.output();
          break;
        case 12:
          console.log("- Dien tich hinh vuong:", shape.getArea());
          break;
      }
    } while (choice !== 0);
    console.log(this.info("Cam on da su dung"));
  }
}
