import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, Brain } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  Brain = Brain;

  router = inject(Router);

  navigateToDescriptions() {
    this.router.navigate(['/descriptions']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToTeam() {
    this.router.navigate(['/team']);
  }
}
