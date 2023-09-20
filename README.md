
# Demo Project - HTTP States in Angular

A simple Angular-based Ionic Starter project that illustrates an approach handling different states of an HTTP request to your API - like `loading`, `successful`, and `error`.

In the example, we setup a `UserService` that loads a list of users from [RandomUser.me](https://randomuser.me/documentation). The project shows two similar approaches that make use of RXJS pipes and and `ApiResponse<T>` interface that serves as a wrapper so that we can communincate:

* When a request begins
* If the request was successful, provide a reference to the data
* If the request fails, provide a reference to relevant error information

The service can also simulate the conditions for a loading, and errors. There are buttons in the menu bar of the app.

## Examples

Below is the core UserService that pulls from the API. The `delayWhen` and `HttpErrorResponse` are optional features that can be used to simulate thoses states in the demo app

```typescript
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
```
