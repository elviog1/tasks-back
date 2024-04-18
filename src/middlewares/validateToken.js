import jwt from "jsonwebtoken";
export const authRequired = async (req, res, next) => {
  try {
    const { token } =await req.cookies;
    if (!token)
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.user = user; //guardo en REQ la prop user, el valor de USER
      next();
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
