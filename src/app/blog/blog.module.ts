import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostComponent } from './post/post.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    BlogRoutingModule
  ],
  declarations: [
    PostsContainerComponent,
    PostContainerComponent,
    PostComponent
  ]
})
export class BlogModule { }
