import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/shared/auth.service';
import { Observable } from 'rxjs';
import { PostModel } from '../post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http: HttpClient,
    private authService: AuthService) { }

  // private apiUrl = 'https://api.example.com';
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': `Bearer ${this.authService.getJwtToken()}`
  //   })
  // };

  

  // get(endpoint: string) {
  //   return this.http.get(`${this.apiUrl}/${endpoint}`, this.httpOptions);
  // }

  getAllPosts():Observable<Array<PostModel>> {
  //  console.log(this.httpOptions);
    return this.http.get<Array<PostModel>>('http://localhost:8041/api/posts/getAll');
  }

  // post(endpoint: string, data: any) {
  //   return this.http.post(`${this.apiUrl}/${endpoint}`, data, this.httpOptions);
  // }

}

