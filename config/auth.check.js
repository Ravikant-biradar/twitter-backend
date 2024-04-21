import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../config/.env" });

const check_authorised = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(`ur token is here ${token}`);
    if (!token) {
      return res.send("user not authorised");
    }
    const varifytoken = await jwt.verify(token, process.env.TOKEN);
    console.log(varifytoken.take);

    next();
  } catch (error) {
    console.log(`error while authorisation ${error}`);
  }
};

export default check_authorised;
