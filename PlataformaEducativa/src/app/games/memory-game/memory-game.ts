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
  activeCard = signal<number | null>(null);
  feedbackCard = signal<number | null>(null);
  feedbackType = signal<'correct' | 'wrong' | null>(null);
  gameOver = signal(false); 
  clickedCard = signal<number | null>(null);
  isCorrectClick = signal<boolean | null>(null);

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.isPlaying.set(true);
    this.round.set(0);
    this.sequence = [];
    this.userSequence = [];
    this.gameOver.set(false);
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
      if (index < this.sequence.length) 
      {

        console.log('Playing card:', this.sequence[index]);
        const card = this.sequence[index];
        this.activeCard.set(card); // ativa animação
        this.sequence[index];

        setTimeout(() => {
          this.activeCard.set(null); // desativa depois de um tempo
        }, 500);

        index++;
      } 
      else 
      {
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

    const correct = this.sequence[currentIndex] === card;

    this.clickedCard.set(card);
    this.isCorrectClick.set(correct);

    setTimeout(() => {
      this.clickedCard.set(null);
      this.isCorrectClick.set(null);
    }, 200);

    if (this.userSequence[currentIndex] !== this.sequence[currentIndex]) {
      this.gameOver.set(true);
      setTimeout(() => {
        this.gameOver.set(false); // desativa depois de um tempo
      
        this.isPlaying.set(false);
        this.startGame();
      }, 2000);
    } else if (this.userSequence.length === this.sequence.length) {
      setTimeout(() => this.nextRound(), 1000);
    }
  }

}
