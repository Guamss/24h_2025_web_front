import {Component} from '@angular/core';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {Questionannee} from '../../model/questionannee';

@Component({
  selector: 'app-juste-question',
  standalone: true,
  imports: [
    Slider,
    FormsModule,
  ],
  templateUrl: './juste-question.component.html',
  styleUrl: './juste-question.component.css'
})
export class JusteQuestionComponent {
  launched: boolean = false;
  finished: boolean = false;
  score: number = 0;
  inputedvalue: number = 1800;
  currentquestion: number = 0;
  questions: Questionannee[] = [
    {
      nom: "Louis Lépine",
      text: "Homme politique et créateur du concours Lépine",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Louis_L%C3%A9pine.jpg",
      answer: 1846
    },
    {
      nom: "Jules Favre",
      text: "Homme politique, protestant du courant libéral, il fut un républicain convaincu mais modéré.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Jules_Favre_1865_Nadar.jpg",
      answer: 1809
    },
    {
      nom: "Justin Godart",
      text: "Résistant et homme politique, militant du Parti radical-socialiste. Fondateur en 1918 de la Ligue contre le cancer qu'il préside jusqu'en 1956. Participe à l'Organisation internationale du travail. Député de Lyon (1906-1926), sénateur du Rhône (1926-1940), maire de Lyon (en 1944-45).",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Justin_Godart.jpg/1280px-Justin_Godart.jpg",
      answer: 1871
    },
    {
      nom: "Pierre Goldman",
      text: "Intellectuel engagé d'extrême gauche ayant glissé dans le banditisme, demi-frère aîné du chanteur Jean-Jacques Goldman.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pierre_Goldman.jpg",
      answer: 1944
    },
    {
      nom: "Auguste Burdeau",
      text: "Homme politique de la Troisième République. Normalien et agrégé de philosophie, il défend la laïcité. Député du Rhône (1885-1894), il devient ministre puis président de la Chambre des Députés en 1894.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Auguste_Burdeau%2C_philosophe_et_homme_politique.jpg",
      answer: 1851
    },
  ]

  launch(): void {
    this.launched = true;
  }

  restart(): void {
    this.score = 0;
    this.currentquestion = 0;
    this.inputedvalue = 1800;
    this.finished = false;
    this.launched = false;
  }


  answering() {
    const current = this.questions[this.currentquestion];

    if (!current) {
      this.finished = true;
      return;
    }

    if (this.inputedvalue >= 1800 && this.inputedvalue <= 2020) {
      const diff = Math.abs(this.inputedvalue - current.answer);
      if (diff < 20) {
        this.score += 20 - diff;
      }

      this.currentquestion++;
      if (this.currentquestion >= this.questions.length) {
        this.finished = true;
      }
    }
  }
}
