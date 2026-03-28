import { Component, OnInit} from '@angular/core';
import {CommonModule } from '@angular/common';

@Component({
    selector: 'app-match-game',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './match-game.html',
    styleUrls: ['./match-game.css']
})
export class MatchGame implements OnInit {
    fases = [
        { opcoes: ['🐶', '🐱', '🐹', '🚗'], correta: '🚗' },
        { opcoes: ['🍎', '🍌', '🥦', '🍇'], correta: '🥦' },
        { opcoes: ['✈️', '🚢', '🚀', '🎸'], correta: '🎸' },
        { opcoes: ['☀️', '☁️', '❄️', '🍕'], correta: '🍕' },
        { opcoes: ['✏️', '📓', '🎒', '🧸'], correta: '🧸' },
        { opcoes: ['🦁', '🐯', '🐘', '🍦'], correta: '🍦' },
        { opcoes: ['🦷', '👁️', '👂', '👟'], correta: '👟' }, 
        { opcoes: ['🏠', '🏢', '🏰', '🛶'], correta: '🛶' }, 
        { opcoes: ['🎸', '🎻', '🥁', '🍰'], correta: '🍰' }, 
        { opcoes: ['👮', '👩‍⚕️', '👨‍🚒', '🦖'], correta: '🦖' }, 
        { opcoes: ['🌙', '⭐', '🪐', '🚲'], correta: '🚲' }, 
        { opcoes: ['🌹', '🌻', '🌵', '🍔'], correta: '🍔' }, 
        { opcoes: ['🧤', '🧣', '🧥', '🩱'], correta: '🩱' }, 
        { opcoes: ['⚽', '🏀', '🎾', '🍩'], correta: '🍩' }, 
        { opcoes: ['🥛', '🧃', '☕', '🪑'], correta: '🪑' }  
    ];

    faseAtual = 0;
    mensagem = "Qual desses objetos não combina com o grupo?";
    bloquearCliques = false;

    ngOnInit() {
        this.fases.sort(() => Math.random() - 0.5); // Embaralha as fases para cada jogo

        this.fases.forEach(fase => {
            fase.opcoes.sort(() => Math.random() - 0.5);
        });
    }

    verificar(emoji: string) {
        if (this.bloquearCliques) return;

        if (emoji === this.fases[this.faseAtual].correta) {
            // Se ainda houver fases, pula direto para a próxima
            if (this.faseAtual < this.fases.length - 1) {
                this.faseAtual++;
                this.mensagem = "Boa! Qual o próximo que não combina?";
            } else {
                // Se for a última fase
                this.mensagem = "Incrível! Você completou todos os desafios! 🏆";
                this.bloquearCliques = true; 
            }
        } else {
            this.mensagem = "Tente novamente 👀!";
        }
    }
}

