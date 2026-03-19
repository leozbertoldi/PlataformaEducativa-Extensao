import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  private router = inject(Router);

  index = 1;

  open() {
    this.router.navigate(['/module', this.index]);
  }
}
