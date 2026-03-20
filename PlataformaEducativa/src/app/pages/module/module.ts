import { Component, inject } from '@angular/core';
import { Modules } from "../../models/module";
import { ActivatedRoute, Router } from '@angular/router';
import { MathGame } from '../../games/math-game/math-game';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-module',
  imports: [MathGame, NgClass],
  templateUrl: './module.html',
  styleUrl: './module.css',
})
export class Module {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  module: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.module = Modules.find(m => m.id === id);
  }

  back() {
    this.router.navigate(['/']);
  }
}
