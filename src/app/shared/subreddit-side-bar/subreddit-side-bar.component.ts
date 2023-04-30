import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent implements OnInit {

  subreddits: string[]=[];
  displayViewAll:false|undefined;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(){};

}
