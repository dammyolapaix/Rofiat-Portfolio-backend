export const adminOnlyMiddleware = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log(req.headers.authorization.split(" ")[1]);

    token = req.headers.authorization.split(" ")[1];
  } else {
    console.log("Invalid token");
  }

  next();
};
