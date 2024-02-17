import React from 'react';
import Link from 'next/link';

function AuthLinks() {

    const status = "notauthenticated"

    return (
        <>
            {
                status === "notauthenticated" ? (
                    <>
                        <Link href="/">Register</Link>
                        <Link href="/">Login</Link>
                    </>            
                ) : (
                    <>
                        <Link href="/">Create</Link>
                        <Link href="/">Logout</Link>
                    </>
                )
            }
        </>
    )
}

export default AuthLinks;