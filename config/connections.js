import * as mongoose from "mongoose";


const chowDb=mongoose.createConnection (
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
    }
);

export {chowDb};