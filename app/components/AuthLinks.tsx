"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

function AuthLinks(props: any) {

    const { status } = useSession();

    return (
        <>
            {
                status === "authenticated" ? (
                    <>
                        <Link href="/my-posts" onClick={() => props.setOpen(false)}>My Posts</Link>
                        <Link href="/write" onClick={() => props.setOpen(false)}>Write</Link>
                        <span onClick={async () => {signOut(); props.setOpen(false)}} className='cursor-pointer'>Logout</span>
                        
                    </>            
                ) : (
                    <>
                        <Link href="/login" onClick={() => props.setOpen(false)}>Login</Link>
                    </>
                )
            }
        </>
    )
}

export default AuthLinks;