import { Post } from './post-list/post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({providedIn: 'root'})
export class PostService{
  private posts: Post[]=[];
  private PostsUpdated=new Subject<Post[]>();
  getPosts(){
    return [...this.posts];
  }


  getPostUpdateListener(){
    return this.PostsUpdated.asObservable();
  }
  addPost(title: string, content: string){
    const post: Post={title: title, content: content};
    this.posts.push(post);
    this.PostsUpdated.next([...this.posts]);
  }
}
