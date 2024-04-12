import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <div className='flex bg-slate-400' >
            <li><Link href="/">Home</Link></li>
            <li><Link href={'/hajira-hisab'}>Hisab Nikash</Link></li>
            <li><Link href={'/cricket/series'}>Series</Link></li>
            <li><Link href={'/livestreaming'}>Live Stream</Link></li>
            <li><Link href={'/studio'}> Studio </Link></li>
            <li><Link href={'/videoconvert'}> VideoC</Link></li>
            <li><Link href={'/videos-stream'}> Videos Stream</Link></li>
            <li><Link href={'/text-to-voice'}> Text To Voice</Link></li>
            <li><Link href={'/speechtotext'}> speech To Text </Link></li>
           
        </div>

        
    );
};

export default Nav;