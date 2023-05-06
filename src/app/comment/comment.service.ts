import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentPayload } from '../comment-payload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  postComment(commentPayload:CommentPayload){
    return this.http.post('http://localhost:8041/api/comments/postcomments',commentPayload);
  }

  getAllCommentsForPost(id:number){
    return this.http.get(`http://localhost:8041/api/comments/postid/${id}`);

  }
}
