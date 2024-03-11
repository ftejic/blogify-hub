import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

const today = new Date();
const startDate = new Date(today);
startDate.setDate(today.getDate() - 60);

export async function GET() {

    try{
        const posts = await prisma.post.findMany({
                take: 3,
                where: {
                    createdAt: {
                        gte: startDate, 
                        lte: today, 
                    },
                },
                include: {user: true},
                orderBy: {
                    views: 'desc'
                }
        })

        return new NextResponse(
            JSON.stringify({posts}),
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