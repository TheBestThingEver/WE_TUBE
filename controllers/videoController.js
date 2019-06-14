export const home = (req, res) => res.render("home", { pageTitle:"Home", greeting:"HOMEEEEEE" });

export const search = (req, res) => {
    const searchingBy = req.query.term;
    res.render("search", { pageTitle:"Search", searchingFor:searchingBy});
};
export const videos = (req, res) => res.render("videos", { pageTitle:"Videos"});
export const upload = (req, res) => res.render("upload", { pageTitle:"Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle:"VideoDetail"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle:"EditVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle:"DeleteVideo"});