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

    const session: Session | null = await getAuthSession();

    

    if(!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!"}),
            {status: 401}
        );
    }

    const POST_PER_PAGE = 10;

    try{
        
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany({
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (parsedPage - 1),
                where: {
                    ...(session && {userEmail: session?.user?.email} as {userEmail : string})
                },
                orderBy: {
                    createdAt: 'desc',
                }
            }),
            prisma.post.count({
                where: {
                    ...(session && {userEmail: session?.user?.email} as {userEmail : string})
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