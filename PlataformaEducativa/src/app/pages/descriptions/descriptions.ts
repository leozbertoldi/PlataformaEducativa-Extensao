import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-descriptions',
  imports: [Header, Footer],
  templateUrl: './descriptions.html',
  styleUrl: './descriptions.css',
})
export class Descriptions {

}
