/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "theme-ui";
import dynamic from "next/dynamic";

//Injected at execution time not build time
const BrowserComponent = dynamic(() => import("../src/components/browser"), {
  ssr: false,
  loading: () => <div>Loading</div>,
});
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
      <BrowserComponent />
    </div>
  </div>
);
export default Pages;

// if you use this function you will opt in to use the Static Generation Rendering mode
// Static Generation Pages built at build time into HTML. CDN cacheable.
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
