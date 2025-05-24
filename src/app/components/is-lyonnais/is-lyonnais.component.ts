import { Component } from '@angular/core';

@Component({
  selector: 'app-is-lyonnais',
  standalone: true,
  templateUrl: './is-lyonnais.component.html',
  styleUrl: './is-lyonnais.component.css',
})
export class IsLyonnaisComponent {
  people = [
    { name: 'Maitre Gims', image: 'gims.jpg', isLyonnais: true },
    { name: 'Frères Lumière', image: 'lumieres.jpg', isLyonnais: true },
    { name: 'Karim Benzema', image: 'benzema.jpg', isLyonnais: true },
    { name: 'André-Marie Ampère', image: 'ampere.jpg', isLyonnais: true },
    { name: 'Jean Dujardin', image: 'dujardin.jpg', isLyonnais: false },
    { name: 'Marie Curie', image: 'curie.jpg', isLyonnais: false },
    { name: 'Mbappe', image: 'mbappe.jpg', isLyonnais: false },
  ];
  currentIndex = 0;
  currentImage = '';
  currentName = '';
  currentAnswer = false;

  hasAnswered = false;
  isCorrect = false;
  feedbackMessage = '';

  constructor() {
    this.pickRandom();
  }

  pickRandom(): void {
    const random = Math.floor(Math.random() * this.people.length);
    const person = this.people[random];
    this.currentIndex = random;
    this.currentImage = person.image;
    this.currentName = person.name;
    this.currentAnswer = person.isLyonnais;
    this.hasAnswered = false;
    this.feedbackMessage = '';
  }

  submitAnswer(userAnswer: boolean): void {
    this.hasAnswered = true;
    this.isCorrect = userAnswer === this.currentAnswer;
    this.feedbackMessage = this.isCorrect ? '✅ Bien joué !' : '❌ Raté !';
  }

  restart(): void {
    this.pickRandom();
  }
}
