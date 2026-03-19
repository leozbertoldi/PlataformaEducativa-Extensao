import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [Card, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  cards = 15;
  cardsArray = Array.from({ length: this.cards });
}
