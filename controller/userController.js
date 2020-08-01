import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, verifypassword },
    } = req;
    if (password !== verifypassword) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
                name: name,
                email: email,
            });
            // console.log(user);
            // console.log(password);
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            console.log("Join");
            res.redirect(routes.home);
        }
        // Todo : Signin
    }
};

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "Sign In" });

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
    const {
        _json: { id, avatar_url, name, email },
    } = profile;
    try {
        console.log(profile);
        const user = await User.findOne({ email });
        if (user) {
            user.githubId = id;
            user.avatarURL = avatar_url;
            user.name = name;
            user.email = email;
            user.save();
            return cb(null, user);
        } else {
            const newUser = await User.create({
                email,
                name,
                githubId: id,
                avatarURL: avatar_url,
            });
            return cb(null, newUser);
        }
    } catch (error) {
        return cb(error);
    }
};

export const postGithubLogin = (req, res) => {
    res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (
    accessToken,
    refreshToken,
    profile,
    cb
) => {
    console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
};

// export const googleLoginCallback

export const logout = (req, res) => {
    // Todo:process Logout
    req.logout();
    res.redirect(routes.home);
};

export const getMe = (req, res) => {
    console.log("me");
    res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};

export const userDetail = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const user = await User.findById(id).populate("videos");
        console.log(user);
        res.render("userDetail", { pageTitle: "User Detail", user });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "Edit Profile" });

export const postEditProfile = async (req, res) => {
    const {
        body: { name, email },
        file,
    } = req;
    try {
        console.log(file, "file");
        console.log(req.user.avatarURL, "userURL");
        await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            avatarURL: file ? file.path : req.user.avatarURL,
        });
        res.redirect(routes.me);
    } catch (error) {
        console.log(error);
        res.redirect("editProfile", { pageTitle: "Edit Profile" });
    }
};

export const getChangePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });

export const postChangePassword = async (req, res) => {
    const {
        body: { oldPassword, newPassword, verifynewPassword },
    } = req;
    try {
        if (newPassword !== verifynewPassword) {
            res.status(400);
            res.redirect(`/users${routes.changePassword}`);
            return;
        }
        await req.user.changePassword(oldPassword, newPassword);
        res.redirect(routes.me);
    } catch (error) {
        res.status(400);
        res.redirect(`/users${routes.changePassword}`);
    }
};
