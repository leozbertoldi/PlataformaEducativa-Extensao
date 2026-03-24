import { Component, OnInit} from '@angular/core';
import {CommonModule } from '@angular/common';

@Component({
    selector: 'app-word-game',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './word-game.html',
    styleUrls: ['./word-game.css']
})

export class WordGame implements OnInit{
    fases = [
        { icone: '🚗', exibicao: 'CA _ O', correta: 'RR', opcoes: ['RR', 'R', 'SS', 'S'] }, // Carro
        { icone: '🐟', exibicao: 'PEI _ E', correta: 'X', opcoes: ['X', 'CH', 'S', 'SS'] }, // Peixe
        { icone: '🌧️', exibicao: 'CHU _ A', correta: 'V', opcoes: ['V', 'F', 'B', 'P'] },  // Chuva
        { icone: '🍎', exibicao: 'MA _ Ã', correta: 'Ç', opcoes: ['Ç', 'S', 'SS', 'C'] },  // Maçã
        { icone: '🦜', exibicao: 'PA _ ARINHO', correta: 'SS', opcoes: ['SS', 'S', 'Ç', 'X'] }, // Passarinho
        { icone: '🎒', exibicao: 'MO _ ILA', correta: 'CH', opcoes: ['CH', 'X', 'C', 'S'] }, // Mochila
        { icone: '🏠', exibicao: 'CA _ A', correta: 'S', opcoes: ['S', 'Z', 'X', 'SS'] }, // Casa 
        { icone: '🌻', exibicao: 'GIRA _ OL', correta: 'SS', opcoes: ['SS', 'S', 'Ç', 'Z'] },
        { icone: '🧀', exibicao: 'QUEI _ O', correta: 'J', opcoes: ['J', 'P', 'D', 'V'] }, // Queijo
        { icone: '🇧🇷', exibicao: 'BRA _ IL', correta: 'S', opcoes: ['Z', 'S', 'X', 'C'] }, // Brasil
        { icone: '🍬', exibicao: 'A _ ÚCAR', correta: 'Ç', opcoes: ['Z', 'S', 'Ç', 'SS'] }, // Açúcar
        { icone: '🎈', exibicao: 'BE _ IGA', correta: 'X', opcoes: ['X', 'CH', 'S', 'SH'] }, // Bexiga
        { icone: '🏊', exibicao: 'PI _ INA', correta: 'SC', opcoes: ['SC', 'S', 'SS', 'XC'] }, // Piscina
        { icone: '✂️', exibicao: 'TE _ OURA', correta: 'S', opcoes: ['S', 'Z', 'X', 'SS'] }, // Tesoura
        { icone: '🎀', exibicao: 'LA _ O', correta: 'Ç', opcoes: ['Ç', 'S', 'SS', 'C'] }, // Laço
        { icone: '🏹', exibicao: 'CA _ AR', correta: 'Ç', opcoes: ['Ç', 'S', 'SS', 'C'] }, // Caçar
        { icone: '⏩', exibicao: 'PRÓ _ IMO', correta: 'X', opcoes: ['X', 'S', 'SS', 'Z'] }, // Próximo
        { icone: '🆘', exibicao: 'AU _ ÍLIO', correta: 'X', opcoes: ['X', 'S', 'SS', 'C'] }, // Auxílio
        { icone: '🥪', exibicao: 'RE _ EIO', correta: 'CH', opcoes: ['CH', 'X', 'S', 'SS'] }, // Recheio
        { icone: '📈', exibicao: 'CRE _ ER', correta: 'SC', opcoes: ['SC', 'S', 'SS', 'Ç'] } // Crescer
    ];

    faseAtual = 0;
    opcoesEmbaralhadas: string[] = [];
    mensagem = '';
    bloquearCliques = false;
    palavraExibida = '';

    ngOnInit() {
        this.carregarFase();
    }

    carregarFase() {
    this.mensagem = '';
    this.bloquearCliques = false;
    // Inicializa a palavra exibida com o valor da fase (ex: "CA _ O")
    this.palavraExibida = this.fases[this.faseAtual].exibicao;
    this.opcoesEmbaralhadas = [...this.fases[this.faseAtual].opcoes].sort(() => Math.random() - 0.5);
    }

    verificarLetra(letra: string) {
        // Pega a fase atual para facilitar a leitura
        const fase = this.fases[this.faseAtual];

        if (letra === fase.correta) {
            // Se acertou, verificamos se tem próxima fase
            if (this.faseAtual < this.fases.length - 1) {
                this.faseAtual++; // Sobe o nível
                this.carregarFase(); // Já carrega tudo novo (reseta bloqueio e embaralha)
                this.mensagem = 'Isso mesmo! Arrasou! 🌟';
            } else {
                this.mensagem = 'Parabéns! Você completou tudo! 🏆';
            }
        } else {
            this.mensagem = 'Essa não... tente de novo! 🤔';
        }
    }
}