//para procurar ícones de lucide-angular, acesse: https://lucide.dev/icons/
import { Brain, Calculator, LayoutGrid, Trophy, Palette, Sigma, BowArrow, CaseUpper } from 'lucide-angular';

export const Modules = [
  {
    id: 'MathGame',
    title: 'Operações Matemáticas',
    description: 'Melhore suas habilidades matemáticas com este jogo divertido.',
    icon: Calculator,
    color: 'bg-pastel-blue',
  },
  {
    id: 'MemoryGame',
    title: 'Decore a Sequência',
    description: 'Um jogo para melhorar sua memória visual e concentração.',
    icon: LayoutGrid,
    color: 'bg-pastel-yellow',
  },
  {
    id: 'SequenceGame',
    title: 'Próximo da Sequência',
    description: 'Pratique identificar padrões e sequências.',
    icon: Brain,
    color: 'bg-pastel-pink',
  },
  {
    id: 'BiggerGame',
    title: 'Qual é o Maior?',
    description: 'Teste suas habilidades de comparação numérica.',
    icon: Trophy,
    color: 'bg-pastel-purple',
  },
  {
    id: 'ColorGame',
    title: 'Cores Loucas',
    description: 'Identifique cores e números rápido neste jogo divertido.',
    icon: Palette,
    color: 'bg-pastel-orange',
  },

  {
    id: 'WordGame',
    title: 'Que palavra é essa?',
    description: 'Ajude a completar as palavras encontrando a letra que falta!',
    icon: CaseUpper,
    color: 'bg-pastel-green',
  },
  
  {
    id: 'ExpressionGame',
    title: 'Expressões Numéricas',
    description: 'Resolva expressões matemáticas para testar seu conhecimento.',
    icon: Sigma,
    color: 'bg-pastel-mint',
  },
  {
    id: "AimGame",
    title: "Tiro ao Alvo",
    description: "Teste sua precisão e reflexos com este jogo de tiro ao alvo.",
    icon: BowArrow,
    color: "bg-pastel-cyan"
  },
];