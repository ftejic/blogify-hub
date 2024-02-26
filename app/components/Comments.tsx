"use client"
import Link from "next/link";
import Comment from "@/app/components/Comment";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";

interface Props {
    postSlug: string;
}

interface User {
    _id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string;
}

interface Data {
    _id: string;
    createdAt: Date;
    desc: string;
    userEmail: string;
    user: User;
    postSlug: string;
}

const fetcher = async (url: string) => {
    const res = await fetch(url);

    const data = await res.json();

    if(!res.ok){
        const error = new Error(data.message);
        throw error;
    }

    return data;
}


function Comments(props: Props) {

    const status = useSession().status;

    const { data, mutate, isLoading }: {data: Data[], mutate: any, isLoading: boolean} = useSWR(
        `http://localhost:3000/api/comments?postSlug=${props.postSlug}`,
        fetcher
    )

    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({desc, postSlug: props.postSlug})
        });
        setDesc("");
        mutate();
    }

  return (
    <div className="mt-10">
        <h1 className="text-2xl font-bold mb-5">Comments</h1>
        {
            status === "authenticated" ? (
                <div className="flex items-center justify-between gap-5">
                    <textarea placeholder="Write a comment" rows={2} onChange={e => setDesc(e.target.value)} value={desc} className="w-full bg-white text-black py-3 px-5"/>
                    <button onClick={handleSubmit} className='bg-grayBlue bg-opacity-0 border border-white hover:bg-opacity-100 py-2 px-4'>Send</button>
                </div>
            ) : (
                <Link href="/login">Log in to write a comment</ Link>
            )
        }
        <div className="flex flex-col gap-10 py-10">
            {isLoading ? "Loading..." : data.map(item => (
                <Comment key={item._id} data={item} />
            ))
            }
            
        </div>
    </div>
  )
}

export default Comments;