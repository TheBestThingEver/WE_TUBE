import routes from "./routes";

export const localMiddleware = (req,res,next) => {
    res.locals.siteName = "WE_TUBE";
    res.locals.routes = routes;
    next();
}