/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";

import Link from "next/link";

const Notes = ({ notes }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note, index) => (
          <div key={index} sx={{ width: "33%", p: 2 }}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;

// GetServerSideProps only runs on the server
// if you use this function you will opt in to use the Server-side Rendering Rendering mode
// Server-side Rendering Pages built at run time into HTML. Cached after the initial hit.
export const getServerSideProps = async (ctx) => {
  const res = await fetch(`http://localhost:3000/api/note/`);
  const { data } = await res.json();
  console.log("data", data);

  return {
    props: {
      notes: data,
    },
  };
};
