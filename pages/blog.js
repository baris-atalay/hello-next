import Link from "next/link";
import withLayout from "./components/hocs/withLayout";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const posts = [
  "Hello Next.js",
  "Learn Next.js is awesome",
  "Deploy apps with Zeit"
];

const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <PostLink title={post} />
        ))}
      </ul>
    </>
  );
};

export default withLayout(Blog);
