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
        label: 'QCM de culture !',
        icon: 'pi pi-pencil',
        routerLink: '/qcm'
      },
      {
        label: 'Devine la date !',
        icon: 'pi pi-calendar',
        routerLink: '/date-guess'
      },
      {
        label: 'Qui est-ce ?',
        icon: 'pi pi-question',
        routerLink: '/found-pixel'
      },
      {
        label: 'Vrais ou faux?',
        routerLink: '/is-lyonnais'
      },
      {
        label: 'Devine la musique!',
        icon: 'pi pi-pencil',
        routerLink: '/guess-music'
      }
    ]
  }
}
