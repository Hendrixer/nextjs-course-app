/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "theme-ui";

const Pages = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);
export default Pages;

export const getStaticProps = (ctx) => {
  // get data from CMS
  return {
    props: {
      content: {
        title: "Look at my note app tho",
      },
    },
  };
};
