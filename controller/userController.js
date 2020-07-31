import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, verifypassword },
    } = req;
    if (password !== verifypassword) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // Todo: Register User
        // Todo : Signin
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "Sign In" });

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    // Todo:process Logout
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("Users", { pageTitle: "Users" });

export const userDetail = (req, res) =>
    res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });
