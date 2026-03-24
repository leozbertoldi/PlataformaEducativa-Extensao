import { Component } from '@angular/core';

@Component({
  selector: 'app-expression-game',
  imports: [],
  templateUrl: './expression-game.html',
  styleUrl: './expression-game.css',
})
export class ExpressionGame {
  
  selectedOption: number | null = null;
  correct: number = 0;
  options: number[] = [];
  expression: string = '';
  
  answer(option: number) {
    this.selectedOption = option;
  }

  ngOnInit() {
    this.generateQuestion();
  }

  generateExpression() {
    const length = Math.floor(Math.random() * 4) + 2;

    const numbers: number[] = [];
    const ops: string[] = [];

    const possibleOps = ['+', '-', '*', '/'];

    // primeiro número
    numbers.push(Math.floor(Math.random() * 10) + 1);

    for (let i = 1; i < length; i++) {
      const op = possibleOps[Math.floor(Math.random() * 4)];
      ops.push(op);

      const prev = numbers[i - 1];

      if (op === '/') {
        let current = this.evaluateLeftToRight(numbers, ops.slice(0, -1));

        // evita divisão quebrada
        let divisor = Math.floor(Math.random() * 9) + 1;

        // força divisor válido
        while (current % divisor !== 0) {
          divisor = Math.floor(Math.random() * 9) + 1;
        }

        numbers.push(divisor);
      }
      else {
        numbers.push(Math.floor(Math.random() * 20) + 1);
      }

    }

    return { numbers, ops };
  }

  evaluateCorrect(numbers: number[], ops: string[]) {
    let expression = '';

    for (let i = 0; i < numbers.length; i++) {
      expression += numbers[i];

      if (ops[i]) 
        expression += ops[i];
    }

    return Math.floor(eval(expression));
  }

  evaluateLeftToRight(numbers: number[], ops: string[]) {
    let result = numbers[0];

    for (let i = 0; i < ops.length; i++) {
      const next = numbers[i + 1];

      switch (ops[i]) {
        case '+': result += next; break;
        case '-': result -= next; break;
        case '*': result *= next; break;
        case '/': result /= next; break;
      }
    }

    return Math.floor(result);
  }

  generateOptions(correct: number, wrong: number) {
    const options = new Set<number>();

    options.add(correct);
    options.add(wrong);

    while (options.size < 4) {
      const variation = Math.floor(Math.random() * 5) - 2;
      options.add(correct + variation);
    }

    return Array.from(options).sort(() => Math.random() - 0.5);
  }

 generateQuestion() {
    const { numbers, ops } = this.generateExpression();

    this.expression = this.buildExpressionString(numbers, ops);

    const correct = this.evaluateCorrect(numbers, ops);
    const wrong = this.evaluateLeftToRight(numbers, ops);

    this.correct = correct;
    this.options = this.generateOptions(correct, wrong);

    this.selectedOption = null;
  }

  buildExpressionString(numbers: number[], ops: string[]) {
    let exp = '';

    for (let i = 0; i < numbers.length; i++) {
      exp += numbers[i];
      if (ops[i]) {
        exp += ' ' + (ops[i] === '*' ? '×' : ops[i] === '/' ? '÷' : ops[i]) + ' ';
      }
    }

    return exp;
  }
}
