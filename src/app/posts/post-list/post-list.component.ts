import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post-list/post.model';
import { PostService } from '../post.service';

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class PostlistComponent implements OnInit, OnDestroy{
 /* posts=[
    {title:'First Post', content: 'This is the first post\'s content'},
    {title:'Second Post', content: 'This is the seocnd post\'s content'},
    {title:'Third Post', content: 'This is the third post\'s content'},
*/
  posts: Post[]=[];
  private postsSub: Subscription;

 //  postService: PostService;

  constructor(public postService: PostService){}

  ngOnInit(){
    this.posts=this.postService.getPosts();
    this.postsSub=this.postService.getPostUpdateListener().subscribe((posts: Post[]) =>{
      this.posts= posts;
    }) ;
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
