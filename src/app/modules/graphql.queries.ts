import { gql } from 'apollo-angular';

export const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
      authorId
      author{
        name
        id
      }
    }
  }
`;

export const GET_ONE_POST = gql`
  query {
    post(id: 1) {
      id
      title
      content
    }
  }
`;
