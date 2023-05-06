import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteServiceService {

  private apiURL = 'http://localhost:8041/api/vote/votePost';

  constructor(private http: HttpClient) {}

  upvotePost(postId: string) {
    const vote = {
      voteType: 'UPVOTE',
      postId: postId
    };
    return this.http.post(this.apiURL, vote);
  }

  downvotePost(postId: string) {
    const vote = {
      voteType: 'DOWNVOTE',
      postId: postId
    };
    return this.http.post(this.apiURL, vote);
  }
}
