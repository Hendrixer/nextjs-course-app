import React from "react";
import { useRouter } from "next/router";

// file => /docs/[...params].jsx
// route => /docs/a/b/c

// Brackets [] in the file name denotes a route with a paramter (here it's the params parameter)
const Note = () => {
  const router = useRouter();

  // grab parameter from url
  // params === ['a', 'b', 'c']
  const { params } = router.query;
  console.log("params", params);
  return <div>Note {params}</div>;
};

export default Note;
