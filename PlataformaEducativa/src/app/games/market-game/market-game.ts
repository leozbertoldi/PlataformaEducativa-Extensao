import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Banknote, CircleDollarSign } from 'lucide-angular';

@Component({
    selector: 'app-market-game',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './market-game.html',
    styleUrls: ['./market-game.css']
})

export class MarketGame implements OnInit {
    fases = [
        { item: '🍦 Sorvete', preco: 7, pago: 10, troco: 3, opcoes: [2, 1, 0.50, 0.10] },
        { item: '🍫 Chocolate', preco: 12, pago: 20, troco: 8, opcoes: [5, 2, 1, 0.50] },
        { item: '🧸 Urso de pelúcia', preco: 32, pago: 50, troco: 18, opcoes: [10, 5, 2, 1] },
        { item: '🍿 Pipoca', preco: 14.50, pago: 20, troco: 5.50, opcoes: [5, 2, 1, 0.50] },
        { item: '🎮 Skin de Jogo', preco: 35.25, pago: 50, troco: 14.75, opcoes: [10, 2, 1, 0.25] },
        { item: '🍎 Maçã', preco: 3.50, pago: 5, troco: 1.50, opcoes: [1, 0.50, 0.25, 0.10] },
        { item: '🍔 Lanche', preco: 22, pago: 50, troco: 28, opcoes: [20, 5, 2, 1] },
        { item: '🛹 Skate Radical', preco: 85, pago: 100, troco: 15, opcoes: [10, 5, 2, 1] },
        { item: '🍩 Donut Rosa', preco: 4.25, pago: 5, troco: 0.75, opcoes: [0.50, 0.25, 0.10, 0.05] },
        { item: '🎒 Mochila Escolar', preco: 45, pago: 50, troco: 5, opcoes: [5, 2, 1, 0.50] },
        { item: '🎈 Balão de Festa', preco: 1.75, pago: 2, troco: 0.25, opcoes: [0.25, 0.10, 0.05, 1] },
        { item: '🍕 Fatia de Pizza', preco: 12.50, pago: 20, troco: 7.50, opcoes: [5, 2, 0.50, 1] },
        { item: '👟 Tênis', preco: 120, pago: 150, troco: 30, opcoes: [20, 10, 5, 2] },
        { item: '📚 Livro', preco: 27.50, pago: 30, troco: 2.50, opcoes: [2, 0.50, 1, 0.25] },
        { item: '🥤 Suco de Laranja', preco: 6.80, pago: 10, troco: 3.20, opcoes: [2, 1, 0.10, 0.50] }
    ];

    banknote = Banknote;
    circleDollarSign = CircleDollarSign;
    faseAtual = 0;
    valorEntregue = 0;
    mensagem = "Forneça o troco correto";
    bloquearCliques = false;

    ngOnInit() {
        this.fases.sort(() => Math.random() - 0.5); // Embaralha as fases para cada jogo

        this.fases.forEach(fase => {
            fase.opcoes.sort(() => Math.random() - 0.5);
        });
    }

    adicionarTroco(valor: number) {
        if (this.bloquearCliques) return;

        // Soma e trata os centavos para evitar bugs de precisão (0.1 + 0.2)
        this.valorEntregue = parseFloat((this.valorEntregue + valor).toFixed(2));

        const trocoCorreto = this.fases[this.faseAtual].troco;

        // CASO 1: ACERTOU (Soma igual ao troco)
        if (this.valorEntregue === trocoCorreto) {
            if (this.faseAtual < this.fases.length - 1) {
                this.faseAtual++;
                this.valorEntregue = 0;
                this.mensagem = "Boa! Próximo cliente na fila!";
            } else {
                this.mensagem = "Incrível! Você fechou o caixa com perfeição! 🏆";
                this.bloquearCliques = true;
            }
        }

        // CASO 2: ERROU (Passou do valor)
        else if (this.valorEntregue > trocoCorreto) {
            this.mensagem = "Opa, passou do valor! Vamos recomeçar o troco deste item? 💸";
            this.valorEntregue = 0; // Reseta na hora para ela tentar de novo
        }

        // CASO 3: AINDA NÃO CHEGOU NO VALOR
        else {
            this.mensagem = `Faltam R$ ${(trocoCorreto - this.valorEntregue).toFixed(2)}...`;
        }
    }
}