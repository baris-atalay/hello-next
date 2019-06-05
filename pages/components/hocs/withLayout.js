import Header from "../Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

function withLayout(WrappedComponent) {
  const withLayoutComponent = props => {
    return (
      <div style={layoutStyle}>
        <Header />
        <WrappedComponent {...props} />
      </div>
    );
  };

  withLayoutComponent.getInitialProps = ctx => {
    if (WrappedComponent.getInitialProps)
      return WrappedComponent.getInitialProps(ctx);
  };

  return withLayoutComponent;
}

export default withLayout;
