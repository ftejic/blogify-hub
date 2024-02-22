"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {

  const { data, status } = useSession();

  const router = useRouter();

  if(status === "loading") {
    return <div>Loading...</div>
  }
  if(status === "authenticated") {
    router.push("/");
  }

  return (
    <div className='pt-20'>
        <div className='flex flex-col gap-5 items-center'>
            <button onClick={() => signIn("google")} className='max-w-lg w-full bg-lightBlue border border-text border-opacity-0 hover:bg-opacity-0 hover:border-opacity-100 py-2 px-4'>Sign in with Google</button>
            <button className='max-w-lg w-full bg-lightBlue border border-text border-opacity-0 hover:bg-opacity-0 hover:border-opacity-100 py-2 px-4'>Sign in with Facebook</button>
            <button className='max-w-lg w-full bg-lightBlue border border-text border-opacity-0 hover:bg-opacity-0 hover:border-opacity-100 py-2 px-4'>Sign in with Github</button>
        </div>
    </div>
  )
}

export default LoginPage;