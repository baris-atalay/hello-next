import Link from "next/link";
import withLayout from "./components/hocs/withLayout";

const PostLink = ({ id, title }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const posts = [
  {
    id: "hello-nextjs",
    title: "Hello Next.js"
  },
  {
    id: "learn-nextjs",
    title: "Learn Next.js is awesome"
  },
  {
    id: "deploy-nextjs",
    title: "Deploy apps with Zeit"
  }
];

const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <PostLink key={post.id} id={post.id} title={post.title} />
        ))}
      </ul>
    </>
  );
};

export default withLayout(Blog);
