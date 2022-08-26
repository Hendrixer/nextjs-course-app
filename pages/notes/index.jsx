import React from 'react';
import Link from 'next/link';

const Page = () => (
    <div>
        <h1>Notes Index Path</h1>

        <Link href="/notes/[id]" as={`/notes/1`}>
            <a>
                Note one
            </a>
        </Link>
    </div>
)

export default Page;