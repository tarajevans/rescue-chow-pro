import * as mongoose from "mongoose";


const chowDb = mongoose.createConnection (
    "mongodb+srv://tarajevans:Merlin320!@cluster0.fr9gdbw.mongodb.net/rescue-chow",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
    }
);

export {chowDb};