import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";
import { getAuthSession } from "@/app/utils/auth";


interface Session {
    user?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    } | null | undefined;
}


export async function GET(req: Request) {

    const {searchParams} = new URL(req.url);

    const page = searchParams.get("page");
    const parsedPage = page != null ? parseInt(page) : 1

    const cat = searchParams.get("cat");

    const postPerPage = searchParams.get("postPerPage");
    const parsedPostPerPage = postPerPage != null ? parseInt(postPerPage) : 5

    try{

        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany({
                take: parsedPostPerPage,
                skip: parsedPostPerPage * (parsedPage - 1),
                where: {
                    ...(cat && {catSlug: cat}),
                },
                orderBy: {
                    createdAt: 'desc',
                }
            }),
            prisma.post.count({
                where: {
                    ...(cat && {catSlug: cat})
                }
            }),
        ]);

        return new NextResponse(
            JSON.stringify({ posts, count }),
            {status: 200}
        );

    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!"}),
            {status: 500}
        );
    }
};


//Create Post
export async function POST(req: Request) {

    const session: Session | null = await getAuthSession();

    if(!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!"}),
            {status: 401}
        );
    }

    try{

        const body = await req.json();

        const post = await prisma.post.create({
            data: {...body, userEmail: session?.user?.email},
        })

        return new NextResponse(
            JSON.stringify(post),
            {status: 200}
        );

    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!"}),
            {status: 500}
        );
    }
};