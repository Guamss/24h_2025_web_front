import {Component, OnInit} from '@angular/core';
import {Score} from '../../model/score';
import {ScoreService} from '../../service/score.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent implements OnInit {
  scores: Score[] = [];

  constructor(private scoreService: ScoreService) {

  }

  ngOnInit(): void {
    this.scoreService.listScores().subscribe({
      next: (scores: Score[]) => {
        this.scores = scores.sort((a, b) => b.score - a.score);
      }
    })
  }



}
