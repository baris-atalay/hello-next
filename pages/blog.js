import Link from "next/link";
import withLayout from "./components/hocs/withLayout";

const getPosts = () => [
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

const PostLink = ({ title, id }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(({ id, title }) => (
          <PostLink key={id} id={id} title={title} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }
        h1 {
          color: #f00;
        }

        ul {
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default withLayout(Blog);
