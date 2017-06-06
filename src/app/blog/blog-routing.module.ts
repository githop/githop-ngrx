import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsContainerComponent} from './posts-container/posts-container.component';
import {PostContainerComponent} from './post-container/post-container.component';

const routes: Routes = [
  { path: '', component: PostsContainerComponent },
  { path: ':id', component: PostContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
