import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubredditModel } from '../subreddit-response';
import { Router } from '@angular/router';
import { SubredditService } from '../subreddit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent {
  createSubredditForm: FormGroup | any;
  subredditModel: SubredditModel;
  name = new FormControl('');
  description = new FormControl('');

  constructor(
    private router: Router,
    private subredditService: SubredditService,
    private toastr: ToastrService
  ) {
    this.subredditModel = {
      name: '',
      description: '',
    };
  }

  ngOnInit() {
    this.createSubredditForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  discard() {
    this.router.navigateByUrl('/home');
  }

  createsubreddit() {
    if (this.isInvalid()) {
      return;
    }

    this.subredditModel.name = this.createSubredditForm.get('name').value;
    this.subredditModel.description = this.createSubredditForm.get(
      'description'
    ).value;

    this.subredditService.createSubreddit(this.subredditModel).subscribe(
      (data) => {
        this.router.navigateByUrl('/list-subreddits');
        // console.log(data);
      },
      (error) => {
        console.log(error);
        this.toastr.error('Registration Failed! Please try again');
      }
    );
  }

  isInvalid(): boolean {
    return (
      this.createSubredditForm.get('name').invalid ||
      this.createSubredditForm.get('description').invalid
    );
  }

}
