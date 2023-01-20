import { Author } from './author.model';

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  author: Author;
}
