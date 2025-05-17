import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Toast} from 'primeng/toast';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Toast, Menubar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Menu déroulant',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Formulaire',
            icon: 'pi pi-pencil',
            routerLink: '/form'
          },
          {
            label: 'Not found',
            icon: 'pi pi-times',
            routerLink: '/jemetnimportequoidanslurldemonnavigateur'
          }
        ]
      }
    ]
  }
}
