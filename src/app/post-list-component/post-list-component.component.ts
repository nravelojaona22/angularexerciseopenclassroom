import { Component, OnInit, Input} from '@angular/core';
import { StaticInjector } from '../../../node_modules/@angular/core/src/di/injector';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts : String; 
  constructor() { }

  ngOnInit() {
  }

}
