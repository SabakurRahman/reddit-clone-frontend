import { Component, Input, OnInit } from '@angular/core';
import { faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { PostModel } from 'src/app/post-model';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit{
  
  faArrowUp = faArrowUp;
  faArrowDown=faArrowDown;

  @Input() post:PostModel|any;
  constructor(){
  }
  
  ngOnInit(): void {
   
  }






  upvotePost(){

  }

  downvotePost(){

  }

  


}
