"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

function AuthLinks() {

    const { status } = useSession();

    return (
        <>
            {
                status === "authenticated" ? (
                    <>
                        <Link href="/my-posts">My Posts</Link>
                        <Link href="/write">Write</Link>
                        <span onClick={() => signOut()} className='cursor-pointer'>Logout</span>
                        
                    </>            
                ) : (
                    <>
                        <Link href="/">Register</Link>
                        <Link href="/login">Login</Link>
                    </>
                )
            }
        </>
    )
}

export default AuthLinks;