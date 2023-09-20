import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RandomUser, RandomUserResponse } from '../models/random-user';
import { EMPTY, Observable, catchError, delay, delayWhen, iif, interval, map, of, startWith } from 'rxjs';
import { ApiResponse } from '../models/api-response';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  users$(shouldThrow = false, delayDuration = 0,  count = 25): Observable<RandomUser[]> {
    return this.http.get<RandomUserResponse>(`https://randomuser.me/api/?results=${count}`)
    .pipe(
      // Introduce a delay
      delayWhen(() => interval(delayDuration)),

      map((response: RandomUserResponse) => {
        // Simulate an error
      if(shouldThrow) {
        throw new HttpErrorResponse({ status: 500, statusText: 'Internal Server Error', url: 'https://randomuser.me/api/' });
      }
      return response.results
    })
    );
  }


  userApiResponse$(shouldThrow = false, delayDuration = 0, count = 25): Observable<ApiResponse<RandomUser[]>> {
    return this.users$(shouldThrow, delayDuration, count)
    .pipe(
      // Map the data to ApiResponse
      map((data: RandomUser[]) => {
        return { data };
      }),

      // Start with loading true
      startWith({ loading: true }),

      // Catch errors and map to ApiResponse
      catchError((error: any) => {
        return of({ error: { code: error.status, message: error.message } });
      }));
  }
}
