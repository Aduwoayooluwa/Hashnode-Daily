import { gql } from "@apollo/client";

export const PostQuery = () => gql`
  query MorePostsByPublication($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      posts(first: $first, after: $after) {
        edges {
          node {
           title, 
            brief,
            url,
            author {
                name
            },
            coverImage {
                url
            }
          }
        }
    
      }
    }
  }
`;