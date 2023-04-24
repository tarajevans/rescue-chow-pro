import * as mongoose from "mongoose";


const chowDb = mongoose.createConnection (
    "mongodb+srv://joefish1973:!Fish6305@rescue-chow.qwstvcn.mongodb.net/rescue-chow",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
    }
);

export {chowDb};