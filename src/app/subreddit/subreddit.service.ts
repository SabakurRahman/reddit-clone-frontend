import { SubredditModel } from 'src/app/subreddit/subreddit-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http:HttpClient) {}
  getAllSubredit():Observable<Array<SubredditModel>>{
    return this.http.get<Array<SubredditModel>>('http://localhost:8041/api/subreddit');
  }

  createSubreddit(subredditModel:SubredditModel):Observable<SubredditModel>{
   
    return this.http.post<SubredditModel>('http://localhost:8041/api/subreddit/create',subredditModel);
  }
}
