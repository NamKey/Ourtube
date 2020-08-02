"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Global
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search"; //USERS

var USERS = "/users";
var USER_DETAIL = "/:id";
var CHANGE_PASSWORD = "/change-password";
var EDIT_PROFILE = "/edit-profile";
var ME = "/me"; // Videos

var VIDEO_DETAIL = "/:id";
var VIDEOS = "/videos";
var UPLOAD = "/upload";
var EDIT_VIDEO = "/:id/edit";
var DELETE_VIDEO = "/:id/delete"; // API

var API = "/api";
var REGISTER_VIEW = "/:id/view";
var ADD_COMMNET = "/:id/comment"; // Authentication
// 1. Github

var GITHUB = "/auth/github";
var GITHUB_CALLBACK = "/auth/github/callback"; // 2. Facebook

var FACEBOOK = "/auth/facebook";
var FACEBOOK_CALLBACK = "/auth/facebook/callback"; // 3. Google

var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: function userDetail(id) {
    if (id) {
      return "/users/".concat(id);
    } else {
      return USER_DETAIL;
    }
  },
  changePassword: CHANGE_PASSWORD,
  editProfile: EDIT_PROFILE,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: function videoDetail(id) {
    if (id) {
      return "/videos/".concat(id);
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: function editVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/edit");
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: function deleteVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/delete");
    } else {
      return DELETE_VIDEO;
    }
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,
  me: ME,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMNET
};
var _default = routes;
exports["default"] = _default;