import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-team',
  imports: [Header, Footer],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {

}
