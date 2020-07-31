import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Edit Video
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
