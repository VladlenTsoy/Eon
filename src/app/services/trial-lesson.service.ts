import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrialLessonService {
  public url = 'http://api.eon.loc/api';

  constructor(private http: HttpClient) {
  }

  //
  request(values): Observable<any> {
    return this.http.post(`${this.url}/request/trial-lesson`, values);
  }
}
