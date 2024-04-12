import HajiraInfo from "../../models/hisabInfo";
import { connectToDB } from "../../utils/database";

export const GET = async (request) => {


    try {
        await connectToDB();
        const hisab = await HajiraInfo.find({})

        if (!hisab)
            return new Response("hisab not found", { status: 404 })

        return new Response(JSON.stringify(hisab), { status: 200 })

    }
    catch (error) {
        return new Response("Failed to fetch data ", { status: 500 })
    }
}