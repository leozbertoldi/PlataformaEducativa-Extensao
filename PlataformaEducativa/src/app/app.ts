import { Component, signal } from '@angular/core';
import { Home } from './pages/home/home';
import { Header } from './components/header/header';
import { Module } from './pages/module/module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [Home, Header, Module],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PlataformaEducativa');
}
