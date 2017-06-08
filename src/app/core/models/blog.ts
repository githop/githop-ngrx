/**
 * Created by githop on 6/7/17.
 */

export interface BlogStore {
  articles: Content[];
}

export const initialBlogState = {
  articles: []
};

export interface Article {
  $key?: string;
  date: string;
  title: string;
  content: Content[];
}

export interface Content {
  sort_order: number;
  type: 'Image' | 'Header' | 'Paragraph';
  text: string;
}
