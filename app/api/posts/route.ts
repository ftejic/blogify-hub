import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export async function GET(req: Request) {

    const {searchParams} = new URL(req.url);

    const page = searchParams.get("page");
    const parsedPage = page != null ? parseInt(page) : 1

    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 3;

    try{

        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany({
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (parsedPage - 1),
                where: {
                    ...(cat && {catSlug: cat})
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