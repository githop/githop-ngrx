import {Article, BlogStore} from '../models/blog';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
/**
 * Created by githop on 6/7/17.
 */

export function articlesIndex(): (state: any) => Observable<Article[]> {
  return (state) => {
    return state
      .map((articles: Article[]) => articles);
  };
}
