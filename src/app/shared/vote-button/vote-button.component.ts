import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { PostModel } from 'src/app/post-model';
import { VoteServiceService } from 'src/app/vote-service.service';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit{
  
  faArrowUp = faArrowUp;
  faArrowDown=faArrowDown;

  @Input() post:PostModel|any;
 
  
  ngOnInit(): void {
   
  }

  constructor(private voteService: VoteServiceService,private router:Router) {}

  






  upvotePost(){
    console.log(this.post.id);
    this.voteService.upvotePost(this.post.id).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/home');
     
    });

   
    
   

  }

  

  downvotePost(){
    this.voteService.downvotePost(this.post.id).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/home');
      console.log("succesee");
      
    });
    

  }

  


}
