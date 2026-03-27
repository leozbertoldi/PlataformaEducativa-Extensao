import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { CommonModule } from "@angular/common";
import { Modules } from "../../models/module";
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [Card, CommonModule, Header, Footer, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  modules = Modules;

}
