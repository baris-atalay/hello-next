import { withRouter } from "next/router";
import withLayout from "./components/hocs/withLayout";
import fetch from "isomorphic-unfetch";

const PostBatman = ({ show }) => (
  <>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={show.image.medium} />
  </>
);

PostBatman.getInitialProps = async function(ctx) {
  const { id } = ctx.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default withLayout(withRouter(PostBatman));
