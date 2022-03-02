import React from "react";
import Link from "next/link";
const notes = [
  {
    title : "Note 1",
    id:1
  },
  {
    title : "Note 2",
    id:2
  },
  {
    title : "Note 3",
    id:3
  }
]
const Notes = () => {
  return ( 
  <div> 
      {notes.map(note => <Link  href= '/notes/[id]' as ={`/notes/${note.id}`}>
      <a>{note.title}</a>
    </Link>)}
  </div>);
};

export default Notes;