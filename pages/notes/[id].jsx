/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "theme-ui";

// import { useRouter } from "next/router";

const Note = ({ note }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {note.title} </h1>
    </div>
  );
};

export default Note;

//This runs at build time (params are in the url)
// GetServerSideProps only runs on the server
// if you use this function you will opt in to use the Server-side Rendering Rendering mode
// Server-side Rendering Pages built at run time into HTML. Cached after the initial hit.
export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
