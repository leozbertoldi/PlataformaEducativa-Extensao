import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  imports: [],
  templateUrl: './memory-game.html',
  styleUrl: './memory-game.css',
})
export class MemoryGame {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  isPlaying = signal(true);
  round = signal(0);
  sequence: number[] = [];
  userSequence: number[] = [];

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.isPlaying.set(true);
    this.round.set(0);
    this.sequence = [];
    this.userSequence = [];
    this.nextRound();
  }

  nextRound() { 
    this.round.update((value) => value + 1);
    this.sequence.push(this.cards[Math.floor(Math.random() * this.cards.length)]);
    console.log('Sequence:', this.sequence);
    console.log('Round:', this.round());
    this.userSequence = [];
    this.playSequence();
  }

  playSequence(){
    console.log('Playing sequence:', this.sequence);
    this.isPlaying.set(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < this.sequence.length) {
        console.log('Playing card:', this.sequence[index]);
        index++;
      } else {
        clearInterval(interval);
        this.isPlaying.set(false);
      }
    }, 1000);
  }

  selectCard(card: number) {
    if (this.isPlaying()) 
      return;
    
    this.userSequence.push(card);
    const currentIndex = this.userSequence.length - 1;

    if (this.userSequence[currentIndex] !== this.sequence[currentIndex]) {
      this.isPlaying.set(false);
      alert(`Game Over! You reached round ${this.round()}.`);
      this.startGame();
    } else if (this.userSequence.length === this.sequence.length) {
      setTimeout(() => this.nextRound(), 1000);
    }
  }

}
