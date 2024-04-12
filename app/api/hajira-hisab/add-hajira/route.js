import HajiraInfo from "@/models/hisabInfo";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { date, presente, taka, vara } = await request.json()

    try {
        await connectToDB();
        const newHisab = new HajiraInfo({ date, presente, taka, vara });
        await newHisab.save();

        return new Response(JSON.stringify(newHisab), { status: 201 })
    }
    catch (error) {
        return new Response("Failed to create ", { status: 500 })
    }
}