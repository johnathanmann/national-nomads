"use client";
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
    const {data: session} = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);

  return (
    <nav>
        <h1>Nav</h1>
        <Link href='/'>Home</Link>
        {session?.user ? (
            <button type='button' onClick={signOut}>Sign out</button>
        ):(
            <>
            {providers &&
            Object.values(providers).map((provider) => (
                <button type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}>
                Sign In
                </button>
            ))}
            </>
        )}
        
    </nav>
  )
}

export default Nav;
