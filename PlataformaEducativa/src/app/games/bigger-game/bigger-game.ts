import { Component } from '@angular/core';

@Component({
  selector: 'app-bigger-game',
  imports: [],
  templateUrl: './bigger-game.html',
  styleUrl: './bigger-game.css',
})
export class BiggerGame {
  options: { label: string; value: number }[] = [];
  selectedOption: number | null = null;
  number1 = Math.floor(Math.random() * 100)/100;
  number2 = Math.floor(Math.random() * 100)/100;
  number3 = Math.floor(Math.random() * 10)/Math.floor(Math.random() * 9) + 1;
  number4 = Math.floor(Math.random() * 100);
  numbers = [this.number1, this.number2, this.number3, this.number4];
  correctNumber = Math.max(...this.numbers);

  answer(option: { label: string; value: number }) {
    this.selectedOption = option.value;
  }

  ngOnInit() {
    this.generateOptions();
  }

  truncate(num: number) {
    return Math.trunc(num * 100) / 100;
  }

  generateRandomValue() {
    const type = Math.floor(Math.random() * 3);

    // DECIMAL
    if (type === 0) {
      const value = this.truncate(Math.random() * 10);
      return {
        label: value.toString(),
        value
      };
    }

    // PORCENTAGEM
    if (type === 1) {
      const percent = Math.floor(Math.random() * 100);
      return {
        label: percent + '%',
        value: percent / 100
      };
    }

    // FRAÇÃO
    const numerator = Math.floor(Math.random() * 9) + 1;
    const denominator = Math.floor(Math.random() * 9) + 1;

    return {
      label: `${numerator}/${denominator}`,
      value: numerator / denominator
    };
  }

  generateOptions() {

    let values: { label: string; value: number }[] = [];

    while (values.length < 4) {
      const newValue = this.generateRandomValue();

      // evita valores muito parecidos (opcional)
      if (!values.some(v => Math.abs(v.value - newValue.value) < 0.01)) {
        values.push(newValue);
      }
    }

    this.options = values.sort(() => Math.random() - 0.5);

    this.correctNumber = Math.max(...values.map(v => v.value));

    this.selectedOption = null;
  }
}
