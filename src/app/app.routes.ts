import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FormComponent} from './components/form/form.component';

export const routes: Routes = [
  {path: '', component: HomeComponent/*, canActivate: [simpleGuardGuard]*/},
  {path: 'form', component: FormComponent},
  {path: '**', component: NotFoundComponent}
];
