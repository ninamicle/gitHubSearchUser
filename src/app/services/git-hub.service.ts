import { CLIENT_ID, CLIENT_SECRET } from './../credentials/gitHub-credentials';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  constructor(private httpClient: HttpClient) {}

  //for git Hub profile
  getProfile(searchProfile: Observable<any>) {
    let dataUrl = `https://api.github.com/users/${searchProfile}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient
      .get<any>(dataUrl)
      .pipe(retry(1), catchError(this.handleError));
  }
  //for git Hub repos
  getRepos(searchProfile: Observable<any[]>) {
    let dataUrl = `https://api.github.com/users/${searchProfile}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient
      .get<any[]>(dataUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Message: ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status} Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
