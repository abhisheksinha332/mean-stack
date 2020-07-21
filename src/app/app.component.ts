import { Component } from '@angular/core';

// import { post } from '../post.model';
import { Post } from './posts/post-list/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] =[];

  onPostAdded(post){
    this.storedPosts.push(post);
  }
}
