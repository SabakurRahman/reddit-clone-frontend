import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  constructor(){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  goToCreatePost(){};
  goToCreateSubreddit(){};


}
