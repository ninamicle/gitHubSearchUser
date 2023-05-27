import { GitHubService } from './../../services/git-hub.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss'],
})
export class GithubAppComponent implements OnInit {
  public gitHubUser: any = '';

  public gitHubProfile: any = '';
  public gitHubRepos: any[] = [];
  public errorMessage: string = '';

  constructor(private gitHubService: GitHubService) {}

  ngOnInit(): void {}

  public onSubmitForm() {
    this.gitHubService.getProfile(this.gitHubUser).subscribe(
      (data) => {
        this.gitHubProfile = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );

    this.gitHubService.getRepos(this.gitHubUser).subscribe(
      (data) => {
        this.gitHubRepos = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
