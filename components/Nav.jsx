"use client";
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProvider} from 'next-auth/react';

const Nav = () => {
    const [providers, setProviders] = useState(null);

    useEffect(()=>{
        const setProviders = async () =>{
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    }, [])
const isUserLoggedIn = true;
  return (
    <nav>
        <h1>Nav</h1>
        <Link href='/'>Home</Link>
        {isUserLoggedIn ? (
            <h1>Logged In</h1>
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
