import React from "react";
import Link from "next/link";

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>Note</a>
    </Link>
  </div>
);

export default Page;
