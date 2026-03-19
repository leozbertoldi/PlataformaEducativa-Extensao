import { Component, signal } from '@angular/core';
import { Home } from './pages/home/home';
import { Jogo1 } from './pages/jogo1/jogo1';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Home, Jogo1, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PlataformaEducativa');
}
