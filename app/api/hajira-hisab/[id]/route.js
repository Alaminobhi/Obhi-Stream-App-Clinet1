import HajiraInfo from "@/models/hisabInfo";
import { connectToDB } from "@/utils/database";

export const DELETE = async (request, { params }) => {

    try {
        await connectToDB();
        await HajiraInfo.findByIdAndRemove(params.id)
        return new Response("deleted successfully", { status: 200 })


    }
    catch (error) {
        console.log(error)
        return new Response("failed", { status: 500 })

    }
}


export const PATCH = async (request, { params }) => {
    const { date, presente, taka, vara } = await request.json();


    try {
        await connectToDB();
        const existingHajira = await HajiraInfo.findById(params.id);

        if (!existingHajira) {
            return new Response("Hajira not found", { status: 404 })
        }

        existingHajira.date = date;
        existingHajira.presente = presente;
        existingHajira.taka = taka;
        existingHajira.vara = vara;
        console.log(existingHajira, 'existing Hajira')

        await existingHajira.save();
        return new Response("hajira  found", { status: 200 })

    }
    catch (error) {

        return new Response("error updating data", { status: 500 })
    }

}