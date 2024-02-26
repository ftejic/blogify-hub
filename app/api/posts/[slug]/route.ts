import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

interface Params {
    slug: string;
}

export async function GET(req: Request, {params}: {params: Params}) {

    const slug = params.slug;

    try{

        const post = await prisma.post.update({
            where: { slug },
            data: {views: {increment: 1}},
            include: {user: true},
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