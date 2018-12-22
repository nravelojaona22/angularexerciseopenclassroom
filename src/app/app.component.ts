import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts = [
    {title: 'MonPremier Blog', content : 'Lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme'},
    {title: 'Deuxième Blog', content : 'Lorem ipsum dolor site acme lorem ipsum dolor site acme '},
    {title: 'Troisième Blog', content : 'Lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme lorem ipsum dolor site acme'}
  ]
  constructor(){
    /*this.posts.forEach(post => {
      post.created_at = new Date();
    });*/
  }
}
