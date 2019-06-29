import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle : "Join" });

};
export const postJoin = (req, res) => {
    const password = req.body.password,
          passwordTwo = req.body.password2;
    if (password !== passwordTwo){
        res.status(400);
        res.render("join", { pageTitle : "Join" });
    } else {
        console.log("it's working");
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => {
    res.render("login", { pageTitle : "Login" });
};

export const postLogin = (req, res) => 
    res.redirect(routes.home);

export const logout = (req, res) => {
    res.redirect(routes.home);
};
export const getUsers = (req, res) => res.render("users", { pageTitle : "Users" });
export const postUsers =(req, res) => {
    res.redirect(routes.changePassword);
}
export const userDetail = (req, res) => res.render("userDetail", { pageTitle : "UserDetail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle : "EditProfile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle : "ChangePassword" });
