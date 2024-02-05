
import Post from './Post';
import { useQuery } from '@apollo/client';
import { PostQuery } from '../../gql/schema';

interface Post {
  node: {
    id: number
    title: string
    brief: string
    url?: string
    coverImage: {
      url: string
    }
  }
}

const PostsPage= ({ hostUrl }: Readonly<{hostUrl : string | null}>) => {
    const { loading, error, data } = useQuery(PostQuery(), {
      variables: {
        host: hostUrl ?? "codingpastor.dev",
        first: 10,
        after: null
      }
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const blogPosts = data?.publication?.posts?.edges

  return (
    <div className="p-4 flex flex-wrap">
      {blogPosts.map((post: Post, index: number) => (
        <Post
          key={post.node.id ?? index}
          title={post.node.title}
          imageUrl={post?.node?.coverImage?.url}
        />
      ))}
    </div>
  );
};

export default PostsPage;
