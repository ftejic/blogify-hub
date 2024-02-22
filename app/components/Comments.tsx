import Link from "next/link";
import Comment from "@/app/components/Comment";

function Comments() {

    const status = "authenticated";

  return (
    <div className="mt-10">
        <h1 className="text-2xl font-bold mb-5">Comments</h1>
        {
            status === "authenticated" ? (
                <div className="flex items-center justify-between gap-5">
                    <textarea placeholder="Write a comment" rows={2} className="w-full bg-white text-bg py-3 px-5"/>
                    <button className='bg-grayBlue bg-opacity-0 border border-white hover:bg-opacity-100 py-2 px-4'>Send</button>
                </div>
            ) : (
                <Link href="/login">Log in to write a comment</ Link>
            )
        }
        <div className="flex flex-col gap-10 py-10">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    </div>
  )
}

export default Comments;