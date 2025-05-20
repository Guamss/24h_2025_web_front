import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/person';
import {PersonService} from '../../services/person.service';
import {JsonPipe} from '@angular/common';
import {MessageService} from 'primeng/api';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JsonPipe,
    Button
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  protected persons: Person[] = [];

  constructor(private personService: PersonService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

    // On s'abonne à un observable, ça a pour conséquence de "l'activer".
    // Concrètement ça envoit une requête HTTP à l'API sur l'adresse 'http://localhost:8080/api/persons/'
    this.personService.listPersons().subscribe({
      // Exécuté si la requête réussi
      next: (retrievePersons: Person[]) => {
        this.persons = retrievePersons;
      },
      // Si ça foire
      error: (error) => {
        console.error(`Une erreur est survenue : ${error.error.message}`);
      }
    })
  }

  toast(): void {
    this.messageService.add({
      summary: "Petit toast",
      detail: "Ce totast c'est grâce à primeng !",
      severity: "success"
    })
  }

}
