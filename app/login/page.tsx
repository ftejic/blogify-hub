"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function LoginPage() {

  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  if(status === "loading") {
    return <div>Loading...</div>
  }

  

  return (
    <div className='pt-20'>
        <div className='flex flex-col gap-5 items-center'>
            <button onClick={() => signIn("google")} className='max-w-lg w-full bg-lightBlue border border-text border-opacity-0 hover:bg-opacity-0 hover:border-opacity-100 py-2 px-4'>Continue with Google</button>
            <button onClick={() => signIn("github")} className='max-w-lg w-full bg-lightBlue border border-text border-opacity-0 hover:bg-opacity-0 hover:border-opacity-100 py-2 px-4'>Continue with GitHub</button>
        </div>
    </div>
  )
}

export default LoginPage;