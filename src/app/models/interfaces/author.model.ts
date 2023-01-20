import { Post } from './post.model';

export interface Author {
  id: number,
  name: string,
  posts?: Post[]
}
