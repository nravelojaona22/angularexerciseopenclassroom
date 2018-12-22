import { Component, OnInit, Input } from '@angular/core';
import { StaticInjector } from '../../../node_modules/@angular/core/src/di/injector';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  likeIt : number;
  dislikeIt : number;
  created_at: Date;

  constructor() { 
    this.likeIt=0;
    this.dislikeIt=0;
    this.created_at = new Date;
  }

  onLike(){
    this.likeIt++;
  }

  onDislike(){
    this.dislikeIt++;
  }

  ngOnInit() {
  }

}
