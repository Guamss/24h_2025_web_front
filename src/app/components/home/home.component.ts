import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  toast(): void {
    this.messageService.add({
      summary: "Petit toast",
      detail: "Ce totast c'est grâce à primeng !",
      severity: "success"
    })
  }

  quiz(): void {
    this.messageService.add({
      summary: "Lien prévu pour le quiz",
      detail: "Lien prévu pour le quiz",
      severity: "warn"
    })
  }
}
