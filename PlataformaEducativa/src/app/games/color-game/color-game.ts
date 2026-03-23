import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-color-game',
  imports: [UpperCasePipe],
  templateUrl: './color-game.html',
  styleUrl: './color-game.css',
})



export class ColorGame {

  colors = ['vermelho', 'azul', 'verde', 'amarelo', 'roxo', 'rosa', 'marrom', 'preto', 'branco'];
  number = Math.floor(Math.random() * 9) + 1;
  paridade = this.number % 2 === 0 ? 'par' : 'ímpar';
  correctColor = this.colors[Math.random() * this.colors.length | 0];

}
