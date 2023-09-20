import { Pipe, PipeTransform } from '@angular/core';
import { Observable, catchError, isObservable, map, of, startWith } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Pipe({
  name: 'api',
  standalone: true
})
/**
 * Wrap an observable in an ApiResponse
 * This is useful for displaying loading and error states
 */
export class ApiPipe implements PipeTransform {

  transform<T>(value?: Observable<T>): Observable<ApiResponse<T>> | undefined {

    // If the value is an observable, attach the api response logic
    // Otherwise, return the value
    if(value!== undefined && isObservable(value)) {
      return value.pipe(
        // Map the data to ApiResponse
        map((data: T) => { return { data }; }),

        // Start with loading true
        startWith({ loading: true }),

        // Catch errors and map to ApiResponse
        catchError((error) => of( {
          error: {
            code: error.status,
            message: error.message
          } }
          )
      ));
    }
    return value;
  }
}
