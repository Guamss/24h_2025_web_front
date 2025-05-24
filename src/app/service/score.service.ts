import {Injectable} from '@angular/core';
import {ConfigurationService} from './configuration.service';
import {HttpClient} from '@angular/common/http';
import {Score} from '../model/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private apiUrl: string = "";

  constructor(private httpClient: HttpClient,
              protected configurationService: ConfigurationService) {
    this.apiUrl = `${configurationService.getApiUrl()}/scores`;
  }

  publishScore(name: string, score: number) {
    return this.httpClient.post<Score>(`${this.apiUrl}`, {name: name, score: score});
  }

  listScores() {
    return this.httpClient.get<Score[]>(`${this.apiUrl}`);
  }
}
