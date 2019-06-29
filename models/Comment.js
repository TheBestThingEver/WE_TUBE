import mongoose, { model } from "mongoose";

const CommentSchema = new mongoose.Schema({
    text:{
        type : String,
        required : "Text is required"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const CommentModel = mongoose.model("Comment", CommentSchema);
export default CommentModel;