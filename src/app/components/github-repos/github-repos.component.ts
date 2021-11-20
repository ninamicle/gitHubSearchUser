import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss'],
})
export class GithubReposComponent implements OnInit {
  @Input() gitHubRepos: any;

  constructor() {}

  ngOnInit(): void {}
}
