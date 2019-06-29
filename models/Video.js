import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
        required: "File URL is Required"
    },
    title:{
        type:String,
        required:"Title is required"
    },
    description: String,
    views:{
        type: Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment" // Where the above 'type' has come from??
        }
    ]
});

//mongoose.model(***NAME OF THE MODEL*** , SCHEMA);
const VideoModel = mongoose.model("Video", VideoSchema);
export default VideoModel;