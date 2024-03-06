import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

const today = new Date();
const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

export async function GET() {

    try{

        const post = await prisma.post.findFirst({
                take: 1,
                where: {
                    createdAt: {
                        gte: firstDayOfLastMonth, 
                        lte: lastDayOfLastMonth, 
                    },
                },
                orderBy: {
                    views: 'desc'
                }
        })

        return new NextResponse(
            JSON.stringify({post}),
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