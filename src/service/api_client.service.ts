import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor(private http: HttpClient) {}

  /**
   * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and returns the
   * response in an `ArrayBuffer`.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
   */
  public get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options).pipe(catchError(this.handleError));
  }

  /**
   * Constructs a `POST` request that interprets the body as an `ArrayBuffer` and returns
   * an `ArrayBuffer`.
   *
   * @param url The endpoint URL.
   * @param body The content to replace with.
   * @param options HTTP options.
   *
   * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
   */
  public post<T>(url: string, data: any, options?: any) {
    return this.http
      .post<T>(url, data, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Constructs a `PUT` request that interprets the body as an `ArrayBuffer` and returns the
   * response as an `ArrayBuffer`.
   *
   * @param url The endpoint URL.
   * @param body The resources to add/update.
   * @param options HTTP options
   *
   * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
   */
  public put<T>(url: string, data: any, options?: any) {
    return this.http
      .put<T>(url, data, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer`
   *  and returns the response as an `ArrayBuffer`.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   * @return  An `Observable` of the response body as an `ArrayBuffer`.
   */
  public delete<T>(url: string, options?: any) {
    return this.http.delete<T>(url, options).pipe(catchError(this.handleError));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError(errorResponse: HttpErrorResponse) {
    // return an observable with a user-facing error message
    return throwError('Error Occurred; please try again later.');
  }
}
