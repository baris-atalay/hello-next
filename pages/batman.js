import Link from "next/link";
import fetch from "isomorphic-unfetch";
import withLayout from "./components/hocs/withLayout";

const Batman = props => (
  <>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link
            as={`/post-batman/${show.id}`}
            href={`/postBatman?id=${show.id}`}
          >
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

Batman.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default withLayout(Batman);
