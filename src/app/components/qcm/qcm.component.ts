import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {RadioButton} from 'primeng/radiobutton';
import {Button, ButtonDirective} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {Question} from '../../model/question';
import {ScoreService} from '../../service/score.service';
import {Score} from '../../model/score';
import {InputText} from 'primeng/inputtext';
import {Router} from '@angular/router';

@Component({
  selector: 'app-qcm',
  standalone: true,
  imports: [
    Card
    RadioButton,
    ButtonDirective,
    FormsModule,
    Button,
    InputText
  ],
  templateUrl: './qcm.component.html',
  styleUrl: './qcm.component.css'
})
export class QcmComponent {
  username: string = '';
  started: boolean = false;
  guess: string = '';
  currentQuestionIndex: number = 0;
  questions: Question[] = [
    {
      text: "🌃 Quelle ville organise chaque année la célèbre Fête des Lumières ?",
      options: ["Paris", "Lyon", "Nice", "Strasbourg"],
      answer: 1
    },
    {
      text: "🎥 Qui sont considérés comme les inventeurs du cinéma ?",
      options: ["Les frères Lumière", "Thomas Edison", "Charlie Chaplin", "Georges Méliès"],
      answer: 0
    },
    {
      text: "💡 Que symbolise historiquement la lumière dans la philosophie des Lumières ?",
      options: ["La richesse", "La force", "La connaissance", "La religion"],
      answer: 2
    },
    {
      text: "🌃 Lors de la Fête des Lumières, que déposent traditionnellement les Lyonnais à leurs fenêtres ?",
      options: ["Des lanternes", "Des guirlandes électriques", "Des photophores", "Des bougies"],
      answer: 3
    },
    {
      text: "🎥 Quel fut le tout premier film projeté par les frères Lumière ?",
      options: [
        "L'arroseur arrosé",
        "Sortie de l'usine Lumière à Lyon",
        "Le train entrant en gare de La Ciotat",
        "La danse serpentine"
      ],
      answer: 1
    },
    {
      text: "💡 Le siècle des Lumières fait référence à :",
      options: [
        "Une période de grands progrès scientifiques",
        "Une révolution artistique",
        "Une réforme religieuse",
        "Une période d’expansion militaire"
      ],
      answer: 0
    },
    {
      text: "🌃 Quel quartier de Lyon est particulièrement mis en valeur pendant la Fête des Lumières ?",
      options: ["La Croix-Rousse", "Part-Dieu", "Fourvière", "Confluence"],
      answer: 2
    },
    {
      text: "🎥 Où se situe l’Institut Lumière, musée dédié au cinéma ?",
      options: ["Paris", "Lyon", "Marseille", "Cannes"],
      answer: 1
    },
    {
      text: "💡 Dans quel domaine utilise-t-on le terme 'transmission de la lumière' de manière symbolique ?",
      options: ["Sport", "Éducation", "Médecine", "Politique"],
      answer: 1
    },
    {
      text: "🌃 Quelle technologie est aujourd’hui privilégiée pour un éclairage public durable ?",
      options: ["Halogène", "Incandescence", "LED", "Néon"],
      answer: 2
    }
  ];

  score = 0;
  finished = false;

  constructor(private scoreService: ScoreService,
              private router: Router) {
  }

  validateGuess() {
    const current = this.questions[this.currentQuestionIndex];
    if (this.guess === current.options[current.answer]) {
      this.score++;
    }
    this.guess = '';
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.finished = true;
    }
  }

  saveScore() {
    if (this.username !== '' && this.score >= 0) {
      this.scoreService.publishScore(this.username, this.score).subscribe({
        next: () => {
          this.router.navigateByUrl('/scoreboard');
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }

  restart() {
    this.guess = '';
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.finished = false;
  }

}
