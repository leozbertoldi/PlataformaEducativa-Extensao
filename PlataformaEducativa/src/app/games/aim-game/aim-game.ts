import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-aim-game',
  imports: [],
  templateUrl: './aim-game.html',
  styleUrl: './aim-game.css',
})
export class AimGame {
  score = signal(0);
  timeLeft = signal(15);
  isPlaying = signal(false);
  highScore = signal(0);

  target = {
    x: 50,
    y: 50,
    size: 100
  };

  startGame() {
    this.score.set(0);
    this.timeLeft.set(15);
    this.isPlaying.set(true);

    this.moveTarget();

    const timer = setInterval(() => {
      this.timeLeft.update((value) => value - 1);

      if (this.timeLeft() <= 0) {
        clearInterval(timer);
        this.highScore.update((value) => Math.max(value, this.score()));
        this.isPlaying.set(false);
      }
    }, 1000);
  }

  moveTarget() {
    this.target.x = Math.random() * 85;
    this.target.y = Math.random() * 85;
  }

  hitTarget() {
    if (!this.isPlaying()) 
      return;

    this.score.update((value) => value + 1);
    this.moveTarget();
  }
}
