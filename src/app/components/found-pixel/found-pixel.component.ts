import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {Questionimage} from '../../model/questionimage';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

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
  win: boolean = false;
  responded: boolean = false;
  currentQuestionIndex: number = 0;
  questions: Questionimage[] = [
    {
      image: "assets/pxl-lyonnais/AMAmpere.jpg",
      imagepxl: "assets/pxl-lyonnais/PIXEL_AMAmpere.jpg",
      text: 'Qui est cette personnalité ?',
      options: ['Louis Lépine', 'Les Frères Lumière', 'André-Marie Ampère', 'Antoine Griezman', 'Jean-Luc Mélanchon'],
      answer: 2
    },
    {
      image: "assets/pxl-lyonnais/FLumiere.jpg",
      imagepxl: "assets/pxl-lyonnais/PIXEL_FLumiere.jpg",
      text: 'Qui est cette personnalité ?',
      options: ['Karim Benzema', 'Louis Lépine', 'Jean Jacques Goldman', 'Les Frères Lumière', 'Maitre Gims'],
      answer: 3
    },
    {
      image: "assets/pxl-lyonnais/KBenzema.jpg",
      imagepxl: "assets/pxl-lyonnais/PIXEL_KBenzema.jpg",
      text: 'Qui est cette personnalité ?',
      options: ['Karim Benzema', 'André-Marie Ampère', 'Louis Lépine', 'Kilian Mbappé', 'Justin Godart'],
      answer: 0
    },
    {
      image: "assets/pxl-lyonnais/LLepine.jpg",
      imagepxl: "assets/pxl-lyonnais/PIXEL_LLepine.jpg",
      text: 'Qui est cette personnalité ?',
      options: ['Jules Favre', 'Louis Lépine', 'Karim Benzema', 'Auguste Burdeau', 'Les Frères Lumière'],
      answer: 1
    },
    {
      image: "assets/pxl-lyonnais/MGims.jpg",
      imagepxl: "assets/pxl-lyonnais/PIXEL_MGims.jpg",
      text: 'Qui est cette personnalité ?',
      options: ['Justin Godart', 'Kilian Mbappé', 'JUL', 'Maitre Gims', 'Karim Benzema'],
      answer: 3
    },
  ]

  constructor() {
    this.pickRandom();
  }

  pickRandom(): void{
    this.currentQuestionIndex = Math.floor(Math.random() * this.questions.length);
  }

  launch(): void{
    this.launched = true;
  }

  anwser(option: string): void{
    const current = this.questions[this.currentQuestionIndex];
    if (option === current.options[current.answer]) {
      this.win = true;
    }
    this.responded = true;
  }
}
