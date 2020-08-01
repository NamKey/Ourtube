// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//USERS
const USERS = "/users";
const USER_DETAIL = "/:id";
const CHANGE_PASSWORD = "/change-password";
const EDIT_PROFILE = "/edit-profile";
const ME = "/me";

// Videos
const VIDEO_DETAIL = "/:id";
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// API Authentication
// 1. Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";
// 2. Facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";
// 3. Google

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    changePassword: CHANGE_PASSWORD,
    editProfile: EDIT_PROFILE,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: (id) => {
        if (id) {
            return `/videos/${id}/edit`;
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: (id) => {
        if (id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    facebook: FACEBOOK,
    facebookCallback: FACEBOOK_CALLBACK,
    me: ME,
};

export default routes;
