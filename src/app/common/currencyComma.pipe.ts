import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "currencyComma" })
export class CurrencyCommaPipe implements PipeTransform {
  transform(value: number): string {
    const stringWithCommas = this.getStringArray(
      parseInt(value.toString(), 10).toString(),
      []
    ).join(", ");

    if (value.toString().split(".")[1]) {
      return stringWithCommas.concat(`.${value.toString().split(".")[1]}`);
    } else {
      return stringWithCommas;
    }
  }

  getStringArray(
    text: string,
    acc: Array<string>,
    length?: number
  ): Array<string> {
    const textParts = acc;
    const current = length || text.length;
    if (current >= 4) {
      textParts.push(text.slice(current - 3, current));
      return this.getStringArray(text, textParts, current - 3);
    } else {
      if (text.length / 3 !== textParts.length) {
        textParts.push(text.slice(0, text.length - textParts.length * 3));
        return textParts.reverse();
      } else {
        return textParts.reverse();
      }
    }
  }
}
