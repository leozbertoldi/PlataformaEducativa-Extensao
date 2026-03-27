import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card',
  imports: [LucideAngularModule],
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
