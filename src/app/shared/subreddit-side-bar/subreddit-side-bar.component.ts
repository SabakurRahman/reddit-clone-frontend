import { SubredditModel } from 'src/app/subreddit/subreddit-response';
import { SubredditService } from './../../subreddit/subreddit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent implements OnInit {

  subreddits?: Array<SubredditModel>
  displayViewAll?:boolean;
 
  constructor(private subredditService:SubredditService){
   
    this.subredditService.getAllSubredit().subscribe(data=>{
      if (data.length > 3) {
        this.subreddits = data.splice(0, 3);
        this. displayViewAll = true;
      } else {
        this.subreddits = data;
      }
    });

  };

  ngOnInit(): void {
   
  }

}
