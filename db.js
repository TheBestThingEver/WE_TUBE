import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const ENV = process.env;

mongoose.connect( 
    ENV.MONGO_URL,
    {
        userNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("😀  Connected to DB");
const handleError = () => console.log("😡  Error on DB connection");

db.once("open", handleOpen);
db.on("error", handleError);
