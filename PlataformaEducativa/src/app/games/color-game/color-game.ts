import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

type item = {
  number: number;
  color: string;
  isEven: boolean;
}


@Component({
  selector: 'app-color-game',
  imports: [UpperCasePipe],
  templateUrl: './color-game.html',
  styleUrl: './color-game.css',
})

export class ColorGame {

  colors = ['vermelho', 'azul', 'verde', 'amarelo', 'roxo', 'rosa', 'marrom', 'preto', 'branco', 'cinza'];
  number = Math.floor(Math.random() * 10) + 1;
  paridade = this.number % 2 === 0 ? 'par' : 'ímpar';
  correctColor = this.colors[Math.random() * this.colors.length | 0];
  titleColor = this.colors[Math.random() * this.colors.length | 0];
  numbers: item[] = this.generateNumbers();
  isPlaying = signal(false);
  correctAnswer = signal(false);
  wrongAnswer = signal(false);

  colorMap: Record<string, string> = {
    vermelho: '#ef4444', // red-500
    azul: '#3b82f6',     // blue-500
    verde: '#22c55e',    // green-500
    amarelo: '#eab308',  // yellow-500
    roxo: '#a855f7',     // purple-500
    rosa: '#ec4899',     // pink-500
    marrom: '#92400e',   // brown-500
    preto: '#000000',
    branco: '#ffffff',
    cinza: '#6b7280'     // gray-500
  };

  generateNewRound() {
    this.number = Math.floor(Math.random() * 10) + 1;
    this.paridade = this.number % 2 === 0 ? 'par' : 'ímpar';
    this.correctColor = this.colors[Math.random() * this.colors.length | 0];
    this.titleColor = this.colors[Math.random() * this.colors.length | 0];
    this.numbers = this.generateNumbers();  
    this.isPlaying.set(false);
    this.correctAnswer.set(false);
    this.wrongAnswer.set(false);
  }

  checkAnswer(item: item) {
    if (this.isPlaying()) return;

    this.isPlaying.set(true);
    if (item.number === this.number && item.color === this.correctColor) {
      this.correctAnswer.set(true);
      setTimeout(() => {
        this.generateNewRound();
      }, 1000);
    } 
    else {
      this.correctAnswer.set(false);
      this.wrongAnswer.set(true);
      this.isPlaying.set(false); 
    }
  }

  generateNumbers(): item[] {
    const numbers: item[] = [];

    numbers.push({number: this.number, color: this.correctColor, isEven: this.number % 2 === 0});

    while (numbers.length < 12) {
      const num = Math.floor(Math.random() * 10) + 1;
      const color = this.colors[Math.random() * this.colors.length | 0];
      const exists = numbers.some(
        n => n.number === num && n.color === color
      );

      if (!exists) {
        if (color !== this.correctColor || num % 2 !== this.number % 2) {
          numbers.push({
            number: num,
            color: color,
            isEven: num % 2 === 0
          });
        }
      }
    }

    return numbers.sort(() => Math.random() - 0.5);
  }
}
