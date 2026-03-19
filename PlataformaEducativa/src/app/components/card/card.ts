import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  private router = inject(Router);
  @Input() module!: any;
   
  open() {
    this.router.navigate(['/module', this.module.id]);
  }
}
