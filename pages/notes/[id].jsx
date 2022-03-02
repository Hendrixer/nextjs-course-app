import React from 'react';
import {useRouter}  from 'next/router'; // import useRouter hook  
const NoteId = () => {
  const router =  useRouter(); // router object has query prop from which we get the params
  const { id } = router.query 
  return (
    <div>Note {id}</div>
  )
}

export default NoteId