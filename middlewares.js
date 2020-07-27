import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Ourtube";
    res.locals.routes = routes;
    next();
};
