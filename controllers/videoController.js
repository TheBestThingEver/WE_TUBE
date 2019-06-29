import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {

    try{ ///// since the next instruction will be executed regarless of it's successfulness, we need to add 'try' 

        const videos_ = await Video.find({});
        res.render("home", { pageTitle : "Home", videos: videos_ });
    /////async keyword will let JS wait until your instruction to be finished.
    /////await keyword is only valid in async func
    } catch(error){
        console.log("Error");
        res.render("home", { pageTitle : "Home", videos: [] });
    }
    

}

export const search = (req, res) => {
    const searchingBy = req.query.term;
    res.render("search", { pageTitle:"Search", searchingFor:searchingBy});
};

export const getUpload = (req, res) => 
    res.render("upload", { pageTitle:"Upload"}
);

export const postUpload = async(req, res) => {
    const {
        body : {title, description},
        file : {path}
    } = req;
    console.log(path);

    const newVideo = await Video.create({
        fileUrl : path,
        title : title,
        description : description

    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
    
};

export const videos = (req, res) => res.render("videos", { pageTitle:"Videos"}); 
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle:"VideoDetail"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle:"EditVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle:"DeleteVideo"});