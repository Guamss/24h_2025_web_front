import {GuardsCheckEnd, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {QcmComponent} from './components/qcm/qcm.component';
import {JusteQuestionComponent} from './components/juste-question/juste-question.component';
import {FoundPixelComponent} from './components/found-pixel/found-pixel.component';
import {ScoreboardComponent} from './components/scoreboard/scoreboard.component';
import {IsLyonnaisComponent} from './components/is-lyonnais/is-lyonnais.component';
export const routes: Routes = [
  {path: '', component: HomeComponent/*, canActivate: [simpleGuardGuard]*/},
  {path: 'qcm', component: QcmComponent},
  {path: 'date-guess', component: JusteQuestionComponent},
  {path: 'found-pixel', component: FoundPixelComponent},
  {path: 'scoreboard', component: ScoreboardComponent},
  {path: 'is-lyonnais', component: IsLyonnaisComponent},
  {path: '**', component: NotFoundComponent}
];
