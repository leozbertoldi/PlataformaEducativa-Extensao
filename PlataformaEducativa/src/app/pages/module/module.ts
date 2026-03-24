import { Component, inject } from '@angular/core';
import { Modules } from "../../models/module";
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { MathGame } from '../../games/math-game/math-game';
import { MemoryGame } from '../../games/memory-game/memory-game';
import { SequenceGame } from '../../games/sequence-game/sequence-game';
import { BiggerGame } from '../../games/bigger-game/bigger-game';
import { ColorGame } from '../../games/color-game/color-game';
import { WordGame } from '../../games/word-game/word-game';

@Component({
  selector: 'app-module',
  imports: [MathGame, MemoryGame, SequenceGame, BiggerGame, ColorGame, WordGame, NgClass],
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
