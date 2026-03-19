import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { CommonModule } from "@angular/common";
import { Modules } from "../../models/module";

@Component({
  selector: 'app-home',
  imports: [Card, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  modules = Modules;

}
