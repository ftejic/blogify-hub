import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export async function GET() {
    try{

        const categories = await prisma.category.findMany();

        return new NextResponse(
            JSON.stringify({ categories}),
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