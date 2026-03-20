import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-game',
  imports: [],
  templateUrl: './math-game.html',
  styleUrl: './math-game.css',
})
export class MathGame implements OnInit {
  selectedOption: number | null = null;
  
  num1: number = 0;
  num2: number = 0;
  correct: number = 0;
  options: number[] = [];
  operation: number = 0;
  
  enum = {
    add: 0,
    subtract: 1,
    multiply: 2,
    divide: 3
  };

  answer(option: number) {
    this.selectedOption = option;
  }

  ngOnInit() {
    this.GenerateQuestion();
  }

  getOperationSymbol() {
    switch (this.operation) {
      case this.enum.add:
        return '+';
      case this.enum.subtract:
        return '-';
      case this.enum.multiply:
        return '×';
      case this.enum.divide:
        return '÷';
      default:
        return '';
    }
  }


  GenerateQuestion() {
    this.num1 = Math.floor(Math.random() * 100);
    this.num2 = Math.floor(Math.random() * 100);
    this.operation = Math.floor(Math.random() * 4);
    if (this.operation === this.enum.subtract && this.num1 < this.num2) {
      [this.num1, this.num2] = [this.num2, this.num1];
    }
    if (this.operation === this.enum.divide) {
      this.num2 = Math.floor(Math.random() * 10) + 1; // Evitar divisão por zero
      this.num1 = this.num2 * Math.floor(Math.random() * 10); // Garantir que num1 seja divisível por num2
    }
    if (this.operation === this.enum.add) {
      this.correct = this.num1 + this.num2;
    } else if (this.operation === this.enum.subtract) {
      this.correct = this.num1 - this.num2;
    } else if (this.operation === this.enum.multiply) {
      this.correct = this.num1 * this.num2;
    } else if (this.operation === this.enum.divide) {
      this.correct = this.num1 / this.num2;
    }
    this.options = [
      this.correct,
      this.correct + 1,
      this.correct - 1,
      this.correct + 2
    ].sort(() => Math.random() - 0.5);
    this.selectedOption = null;
  }
} 
