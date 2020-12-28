import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// file => /docs/[...params].jsx
// route => /docs/a/b/c

// Brackets [] in the file name denotes a route with a paramter (here it's the params parameter)
const Note = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};

export default Note;
