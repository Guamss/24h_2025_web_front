import { Component } from '@angular/core';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {Questionannee} from '../../model/questionannee';
import {InputText} from 'primeng/inputtext';
import {max} from 'rxjs';

@Component({
  selector: 'app-juste-question',
  standalone: true,
  imports: [
    Slider,
    FormsModule,
    Button,
    InputText
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
      text: "oui1",
      answer: 1900
    },
    {
      text: "oui2",
      answer: 1900
    },
    {
      text: "oui3",
      answer: 1900
    },
  ]

  launch(): void{
    this.launched = true;
  }

  answering(){
    const current = this.questions[this.currentquestion];
    if (this.inputedvalue <= 2020 && this.inputedvalue >= 1800){
      const diff: number = Math.max(this.inputedvalue, current.answer) - Math.min(this.inputedvalue, current.answer);
      if (diff < 20){
        this.score += 20 - diff;
      }
      this.currentquestion++;
      if (this.currentquestion >= this.questions.length){
        this.finished = true;
      }
    }
  }
}
