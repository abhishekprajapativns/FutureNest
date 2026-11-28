const jwt = require("jsonwebtoken");

// Checks the token that the browser sends with the request
function auth(req, res, next) {
  // The token comes in the header like: "Bearer abc123..."
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Please log in first" });
  }

  const token = header.split(" ")[1];

  try {
    // Check that the token is real and not expired
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Remember which user this is, then let the request go ahead
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Login expired, please log in again" });
  }
}

module.exports = auth;
