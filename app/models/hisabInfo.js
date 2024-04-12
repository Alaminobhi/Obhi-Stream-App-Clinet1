import { Schema, model, models } from 'mongoose';


const HajiraInfoSchema = new Schema({

    date: {
        type: String,
        required: [true, 'date is required.'],
    },
    presente: {
        type: String,
        required: [true, 'presente is required.'],
    },
    taka: {
        type: String,
        required: [true, 'taka is required.'],
    },
    vara: {
        type: String,
        required: [true, 'vara is required.'],
    }
});


const HajiraInfo = models.HajiraInfo || model('HajiraInfo', HajiraInfoSchema);


export default HajiraInfo;