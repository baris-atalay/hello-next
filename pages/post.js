import { withRouter } from "next/router";
import withLayout from "./components/hocs/withLayout";

const Post = props => (
  <>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </>
);

export default withLayout(withRouter(Post));
