import { Component } from '@angular/core';

@Component({
  selector: 'app-sequence-game',
  imports: [],
  templateUrl: './sequence-game.html',
  styleUrl: './sequence-game.css',
})
export class SequenceGame {
  sequence: number[] = [];
  options: number[] = [];
  selectedOption: number | null = null;
  correctNumber: number = 0;

  answer(option: number) {
    this.selectedOption = option;
  }

  ngOnInit() {
    this.generateSequence();
  }

  generateSequence() {
    this.sequence = [];
    let number = Math.floor(Math.random() * 100);
    const razao = Math.floor(Math.random() * 10) + 1;
    const multiplicador = Math.floor(Math.random() * 2) + 1;
    this.sequence.push(number);

    for (let i = 0; i < 4; i++) {
      number += razao;
      number *= multiplicador;
      this.sequence.push(number);
    }
    
    this.correctNumber = (this.sequence[this.sequence.length - 1] + razao) * multiplicador;
    this.options = [
      this.correctNumber,
      this.correctNumber + 1,
      this.correctNumber - 1,
      this.correctNumber + 2
    ].sort(() => Math.random() - 0.5);
    this.selectedOption = null;
  }
  
}
