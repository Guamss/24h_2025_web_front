import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../model/person';
import {Observable} from 'rxjs';
import {ConfigurationService} from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl: string = "";

  constructor(private httpClient: HttpClient,
              protected configurationService: ConfigurationService) {
    this.apiUrl = configurationService.getApiUrl();
  }

  listPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiUrl);
  }

  getPersonById(id: string): Observable<Person> {
    return this.httpClient.get<Person>(`${this.apiUrl}/${id}`);
  }
}
