import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {Questionimage} from '../../model/questionimage';
import {RadioButton} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-found-pixel',
  standalone: true,
  imports: [
    Button,
    FormsModule,
  ],
  templateUrl: './found-pixel.component.html',
  styleUrl: './found-pixel.component.css'
})
export class FoundPixelComponent {
  launched = false;
  finished = false;
  score: number = 0;
  currentQuestionIndex: number = 0;
  questions: Questionimage[] = [
    {
      image: "assets/caca.jpg",
      text: 'Quelle est ce Pokémon ?',
      options: ['Pikachu', 'Poupipou', 'Marseille', 'Toulouse'],
      answer: 1
    },
    {
      image: "assets/caca.jpg",
      text: 'Quelle est la capitale de la lumière ?',
      options: ['Paris', 'Lyon', 'Marseille', 'Toulouse'],
      answer: 1
    },
    {
      image: "assets/caca.jpg",
      text: 'Quelle est la capitale de la lumière ?',
      options: ['Paris', 'Lyon', 'Marseille', 'Toulouse'],
      answer: 1
    }
  ]
  launch(): void{
    this.launched = true;
  }

  anwser(option: string): void{
    const current = this.questions[this.currentQuestionIndex];
    if (option === current.options[current.answer]) {
      this.score++;
    }
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.finished = true;
    }
  }
}
