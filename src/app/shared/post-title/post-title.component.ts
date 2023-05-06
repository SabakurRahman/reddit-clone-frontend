import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from 'src/app/post-model';
import { faComments} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit{



  posts$: Array<PostModel>|any;
  faComments = faComments;

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts$ = post;
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  


  goToPost(id: number): void {
    console.log(id);
    this.router.navigateByUrl('/view-post/' + id);
  }


}
